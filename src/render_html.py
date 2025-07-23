import toml
from jinja2 import Environment, FileSystemLoader
import os

# Load data from TOML file
with open("config.toml", "r", encoding="utf-8") as f:
    data = toml.load(f)

# Load Jinja template from templates/html directory
env = Environment(loader=FileSystemLoader("templates/html"))
html_tmpl = env.get_template("resume.html.jinja")

# Render HTML template
rendered_html = html_tmpl.render(data)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(rendered_html)

print("HTML resume generated successfully!")