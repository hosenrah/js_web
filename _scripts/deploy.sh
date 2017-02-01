#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    scp -r dist/static u74789873@s493274694.online.de:js_web/
    echo "Deployed to Webserver."
else
    echo "Not deploying, since this branch isn't master."
fi
