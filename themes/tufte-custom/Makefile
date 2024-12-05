SCSS_DIR := "assets/scss/vendor"

help:
	@echo "Commands available:"

rebuild:
	@rm -rf exampleSite/public
	@cd exampleSite && hugo && cd .. 
	@echo "SITE REBUILT"

chroma:
	hugo gen chromastyles --style=monokai > assets/scss/syntax/syntax-dark.scss