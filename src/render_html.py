import toml
from jinja2 import Environment, FileSystemLoader
import os

# Load data from TOML file
with open("config.toml", "r", encoding="utf-8") as f:
    data = toml.load(f)

# Load Jinja template
template_dir = os.path.join(os.path.dirname(__file__), '../templates/html')
env = Environment(loader=FileSystemLoader(template_dir))
html_tmpl = env.get_template("resume.html.jinja")

# Render HTML template
rendered_html = html_tmpl.render(data)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(rendered_html)

print("html resume generated successfully!")