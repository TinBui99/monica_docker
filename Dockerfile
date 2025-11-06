# Dựa trên image chính thức của Monica
FROM ghcr.io/monicahq/monica-next:main

# Thư mục làm việc
WORKDIR /var/www/html

# Lưu source code mẫu để copy ra local khi cần
RUN mkdir -p /init-copy && cp -r . /init-copy

# Expose cổng HTTP
EXPOSE 80

# Lệnh khởi chạy chính
CMD ["apache2-foreground"]
