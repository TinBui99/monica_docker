# Dockerfile dev mode cho Monica
FROM ghcr.io/monicahq/monica-next:main

# Thư mục làm việc
WORKDIR /var/www/html

# Copy code mẫu ra init-copy để dùng khi container mới tạo
RUN mkdir -p /init-copy && cp -r . /init-copy

# Expose cổng HTTP
EXPOSE 80

# Entry point: set quyền, clear cache, start Apache
ENTRYPOINT ["sh", "-c", "\
    echo '⚙️  Setting permissions and clearing Laravel cache...' && \
    chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache && \
    chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache && \
    php artisan migrate --force && \
    echo '🚀 Starting Apache...' && \
    apache2-foreground \
"]
