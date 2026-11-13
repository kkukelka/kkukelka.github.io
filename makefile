.PHONY: dev deploy

dev:
	python3 -m http.server 3000 --bind 127.0.0.1 --directory docs

deploy:
	@test "$$(git branch --show-current)" = master || { echo "Switch to master before deploying." >&2; exit 1; }
	git add -- docs
	git diff --cached --quiet -- docs || git commit --only -m "Update website" -- docs
	git push origin master
