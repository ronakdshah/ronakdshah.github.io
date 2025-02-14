.PHONY: all run

all: run

run:
	python ./src/render_tex.py
	python ./src/render_html.py

setup:
	pip install -r requirements.txt

format:
	black src/*.py
	isort src/*.py