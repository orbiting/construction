.PHONY: all upload-assets images

all:
	npm start

upload-assets:
	s3cmd sync --verbose --acl-public -c ./.s3cfg public/images/ s3://construction/images/

images:
	convert -resize 2000x -quality 80 assets/images/balkon.jpg jpg:- | jpegtran > public/images/balkon.jpg
	convert -resize 2000x -quality 80 assets/images/rothaus.jpg jpg:- | jpegtran > public/images/rothaus.jpg

	convert -resize 1000x -quality 90 assets/images/christof_moser.jpg jpg:- | jpegtran > public/images/christof_moser.jpg
	convert -resize 1000x -quality 90 assets/images/clara_vuillemin.jpg jpg:- | jpegtran > public/images/clara_vuillemin.jpg
	convert -resize 1000x -quality 90 assets/images/constantin_seibt.jpg jpg:- | jpegtran > public/images/constantin_seibt.jpg
	convert -resize 1000x -quality 90 assets/images/laurent_burst.jpg jpg:- | jpegtran > public/images/laurent_burst.jpg
	convert -resize 1000x -quality 90 assets/images/nadja_schnetzler.jpg jpg:- | jpegtran > public/images/nadja_schnetzler.jpg
	convert -resize 1000x -quality 90 assets/images/patrick_recher.jpg jpg:- | jpegtran > public/images/patrick_recher.jpg
	convert -resize 1000x -quality 90 assets/images/susanne_sugimoto.jpg jpg:- | jpegtran > public/images/susanne_sugimoto.jpg
	convert -resize 1000x -quality 90 assets/images/thomas_preusse.jpg jpg:- | jpegtran > public/images/thomas_preusse.jpg

	jpegtran assets/images/project_r_crew.jpg > public/images/project_r_crew.jpg
	cp assets/images/project_r_logo.svg public/images/project_r_logo.svg
