.PHONY: all upload-assets images standardize

all:
	npm run dev

upload-assets:
	s3cmd sync --verbose --acl-public -c ./.s3cfg assets/images/optimized/ s3://construction/images/
	s3cmd sync --verbose --acl-public -c ./.s3cfg assets/contact/ s3://construction/contact/
	s3cmd sync --verbose --acl-public -c ./.s3cfg assets/media/ s3://construction/media/

images:
	convert -resize 2000x -quality 80 assets/images/raw/balkon.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/balkon.jpg
	convert -resize 2000x -quality 80 assets/images/raw/rothaus.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/rothaus.jpg
	convert -resize 2000x -quality 80 assets/images/raw/wewantyou.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/wewantyou.jpg

	convert -resize 1000x -quality 90 assets/images/raw/christof_moser.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/christof_moser.jpg
	convert -resize 1000x -quality 90 assets/images/raw/clara_vuillemin.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/clara_vuillemin.jpg
	convert -resize 1000x -quality 90 assets/images/raw/constantin_seibt.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/constantin_seibt.jpg
	convert -resize 1000x -quality 90 assets/images/raw/laurent_burst.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/laurent_burst.jpg
	convert -resize 1000x -quality 90 assets/images/raw/nadja_schnetzler.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nadja_schnetzler.jpg
	convert -resize 1000x -quality 90 assets/images/raw/patrick_recher.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/patrick_recher.jpg
	convert -resize 1000x -quality 90 assets/images/raw/susanne_sugimoto.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/susanne_sugimoto.jpg
	convert -resize 1000x -quality 90 assets/images/raw/thomas_preusse.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/thomas_preusse.jpg
	convert -resize 1000x -quality 90 assets/images/raw/richard_hoechner.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/richard_hoechner.jpg

	jpegtran -copy none -progressive assets/images/raw/project_r_crew.jpg > assets/images/optimized/project_r_crew.jpg
	jpegtran -copy none -progressive assets/images/raw/project_r_crew2.jpg > assets/images/optimized/project_r_crew2.jpg
	cp assets/images/raw/project_r_logo.svg assets/images/optimized/project_r_logo.svg

standardize:
	npm run standardize
