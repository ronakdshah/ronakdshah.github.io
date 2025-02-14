import toml
from jinja2 import Environment, FileSystemLoader
import os

# Load data from TOML file
with open("config.toml", "r", encoding="utf-8") as f:
    data = toml.load(f)

# Load Jinja template
template_dir = os.path.join(os.path.dirname(__file__), '../templates/tex')
env = Environment(loader=FileSystemLoader(template_dir))
tex_tmpl = env.get_template("resume.tex.jinja")


# Function to escape LaTeX special characters
def escape_latex(text):
    if isinstance(text, str):  # Only process strings
        replacements = {
            "\\": r"\\textbackslash ",
            "%": r"\%",
            "$": r"\$",
            "&": r"\&",
            "_": r"\_",
            "#": r"\#",
            "{": r"\{",
            "}": r"\}",
            "^": r"\textasciicircum ",
            "~": r"\textasciitilde ",
        }
        for char, replacement in replacements.items():
            text = text.replace(char, replacement)
    return text

# Recursively escape LaTeX special characters in the entire data structure
def escape_dict(d):
    if isinstance(d, dict):
        return {k: escape_dict(v) for k, v in d.items()}
    elif isinstance(d, list):
        return [escape_dict(v) for v in d]
    else:
        return escape_latex(d)

# Escape LaTeX characters in data
escaped_data = escape_dict(data)

# Render template with escaped data
rendered_tex = tex_tmpl.render(escaped_data)

rendered_tex = "\n".join([line for line in rendered_tex.splitlines() if line.strip() != ""])

# Save rendered LaTeX file
with open("resume.tex", "w", encoding="utf-8") as f:
    f.write(rendered_tex)

print("LaTeX resume generated successfully!")
