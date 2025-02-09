import toml
from jinja2 import Template

# Load data from TOML file
with open("config.toml", "r", encoding="utf-8") as f:
    data = toml.load(f)

# Load Jinja template
with open("./templates/resume.tex.jinja", "r", encoding="utf-8") as f:
    tex_tmpl = f.read()

with open("./templates/resume.html.jinja", "r", encoding="utf-8") as f:
    html_tmpl = f.read()

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
template = Template(tex_tmpl)
rendered_tex = template.render(escaped_data)

# Render HTML template
template = Template(html_tmpl)
rendered_html = template.render(data)
# Remove extra empty lines
rendered_tex = "\n".join([line for line in rendered_tex.splitlines() if line.strip() != ""])

# Save rendered LaTeX file
with open("resume.tex", "w", encoding="utf-8") as f:
    f.write(rendered_tex)

print("LaTeX resume generated successfully!")

# Save rendered html file
with open("index.html", "w", encoding="utf-8") as f:
    f.write(rendered_html)

print("html resume generated successfully!")