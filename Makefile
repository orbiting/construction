.PHONY: all upload-assets images standardize

all:
	npm run dev

upload-assets:
	s3cmd sync --verbose --acl-public -c ./.s3cfg assets/images/optimized/ s3://construction/images/
	s3cmd sync --verbose --acl-public -c ./.s3cfg assets/contact/ s3://construction/contact/
	s3cmd sync --verbose --acl-public -c ./.s3cfg \
		--exclude "*" --include "*.zip" \
		assets/media/ s3://construction/media/

images:
	convert -resize 2000x -quality 80 assets/images/raw/balkon.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/balkon.jpg
	convert -resize 2000x -quality 80 assets/images/raw/rothaus.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/rothaus.jpg
	convert -resize 2000x -quality 80 assets/images/raw/rothaus_r.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/rothaus_r.jpg
	convert -resize 2000x -quality 80 assets/images/raw/header_jobs.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/header_jobs.jpg
	convert -resize 2000x -quality 80 assets/images/raw/enterprise_with_hand.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/enterprise_with_hand.jpg
	convert -resize 2000x -quality 80 assets/images/raw/rothaus_republik.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/rothaus_republik.jpg
	convert -resize 2000x -quality 80 assets/images/raw/logo_republik.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/logo_republik.jpg
	convert -resize 2000x -quality 80 assets/images/raw/screen_crowdfunding.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/screen_crowdfunding.jpg
	convert -resize 2000x -quality 80 assets/images/raw/teamwork1.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/teamwork1.jpg
	convert -resize 2000x -quality 80 assets/images/raw/teamwork2.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/teamwork2.jpg
	convert -resize 2000x -quality 80 assets/images/raw/nl7-code.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nl7-code.jpg

	convert -resize 1200x -quality 80 assets/images/raw/it-0.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/it-0.jpg
	convert -resize 1200x -quality 80 assets/images/raw/it-1.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/it-1.jpg
	convert -resize 1200x -quality 80 assets/images/raw/it-2.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/it-2.jpg

	convert -resize 1200x -quality 80 assets/images/raw/hammett_mccarthy.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/hammett_mccarthy.jpg
	convert -resize 1200x -quality 80 assets/images/raw/ochs_waser.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/ochs_waser.jpg
	convert -resize 1200x -quality 80 assets/images/raw/freiheitsbaum.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/freiheitsbaum.jpg
	convert -resize 1200x -quality 80 assets/images/raw/vorstand_genossenschaft.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/vorstand_genossenschaft.jpg
	convert -resize 1200x -quality 80 assets/images/raw/pressefreiheit.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/pressefreiheit.jpg
	convert -resize 1200x -quality 80 assets/images/raw/foto_manifest.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/foto_manifest.jpg
	convert -resize 1200x -quality 80 assets/images/raw/taufe_bern.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/taufe_bern.jpg
	convert -resize 1200x -quality 80 assets/images/raw/manifest_rothaus.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/manifest_rothaus.jpg
	convert -resize 1200x -quality 80 assets/images/raw/ausbildung.png jpg:- | jpegtran -copy none -progressive > assets/images/optimized/ausbildung.jpg

	convert -resize 1200x -quality 80 assets/images/raw/nl7-error.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nl7-error.jpg
	convert -resize 1200x -quality 80 assets/images/raw/nl7-kosmos.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nl7-kosmos.jpg
	convert -resize 1200x -quality 80 assets/images/raw/nl7-warroom.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nl7-warroom.jpg
	convert -resize 1200x -quality 80 assets/images/raw/nl7-frankenstein.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nl7-frankenstein.jpg


	convert -resize 600x -quality 80 assets/images/raw/rothaus_thumb.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/rothaus_thumb.jpg


	convert -resize 600x338^ -gravity center -extent 600x338 -quality 80 assets/images/raw/screen_crowdfunding.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/screen_crowdfunding_thumb.jpg

	convert -resize 1000x -quality 90 assets/images/raw/christof_moser.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/christof_moser.jpg
	convert -resize 1000x -quality 90 assets/images/raw/clara_vuillemin.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/clara_vuillemin.jpg
	convert -resize 1000x -quality 90 assets/images/raw/constantin_seibt.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/constantin_seibt.jpg
	convert -resize 1000x -quality 90 assets/images/raw/laurent_burst.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/laurent_burst.jpg
	convert -resize 1000x -quality 90 assets/images/raw/nadja_schnetzler.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/nadja_schnetzler.jpg
	convert -resize 1000x -quality 90 assets/images/raw/patrick_recher.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/patrick_recher.jpg
	convert -resize 1000x -quality 90 assets/images/raw/susanne_sugimoto.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/susanne_sugimoto.jpg
	convert -resize 1000x -quality 90 assets/images/raw/thomas_preusse.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/thomas_preusse.jpg
	convert -resize 1000x -quality 90 assets/images/raw/richard_hoechner.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/richard_hoechner.jpg
	convert -resize 1000x -quality 90 assets/images/raw/andrea_arezina.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/andrea_arezina.jpg

	convert -resize 1000x -quality 90 assets/images/raw/adrienne_fiechter.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/adrienne_fiechter.jpg
	convert -resize 1000x -quality 90 assets/images/raw/anja_conzett.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/anja_conzett.jpg
	convert -resize 1000x -quality 90 assets/images/raw/ariel_hauptmeier.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/ariel_hauptmeier.jpg
	convert -resize 1000x -quality 90 assets/images/raw/brigitte_meyer.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/brigitte_meyer.jpg
	convert -resize 1000x -quality 90 assets/images/raw/carlos_hanimann.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/carlos_hanimann.jpg
	convert -resize 1000x -quality 90 assets/images/raw/daniel_pfaender.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/daniel_pfaender.jpg
	convert -resize 1000x -quality 90 assets/images/raw/lukas_buenger.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/lukas_buenger.jpg
	convert -resize 1000x -quality 90 assets/images/raw/sylke_gruhnwald.jpg jpg:- | jpegtran -copy none -progressive > assets/images/optimized/sylke_gruhnwald.jpg


	jpegtran -copy none -progressive assets/images/raw/project_r_crew.jpg > assets/images/optimized/project_r_crew.jpg
	jpegtran -copy none -progressive assets/images/raw/project_r_crew2.jpg > assets/images/optimized/project_r_crew2.jpg
	cp assets/images/raw/project_r_logo.svg assets/images/optimized/project_r_logo.svg
	cp assets/images/raw/project_r_logo.png assets/images/optimized/project_r_logo.png

standardize:
	npm run standardize
