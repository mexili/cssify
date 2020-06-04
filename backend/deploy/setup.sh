PROJECT_BASE_PATH='/root/0.4.2-cssify/backend'
# Configure nginx
cp $PROJECT_BASE_PATH/deploy/nginx_cssify_api.conf /etc/nginx/sites-available/cssify_api.conf
rm /etc/nginx/sites-enabled/default
ln -s /etc/nginx/sites-available/cssify_api.conf /etc/nginx/sites-enabled/cssify_api.conf
systemctl restart nginx.service

echo "DONE! :)"