.PHONY: copy generate gitpush deploy

copy:
	# rsync -rtvuc ./dist/ ../deploy/
	rsync -rlpcgoDvzi .output/public/* docs
	

gitpush:
	git add . ; git commit -am "deploy generated files"; git push -u origin master;

generate:
	npm run generate

deploy: generate copy gitpush