server {
        listen 80;
        listen [::]:80;

        root /var/www/html;
        index index.html index.htm index.nginx-debian.html;

        server_name catalogue.datatools4heart.bsc.es;

	location / {
		proxy_pass http://localhost:8872/;
        }
}

