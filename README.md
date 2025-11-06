<p align="center">

![Monica's Logo](https://user-images.githubusercontent.com/61099/37693034-5783b3d6-2c93-11e8-80ea-bd78438dcd51.png)

<p>
<h1 align="center">Personal Relationship Manager - Dockerized</h1>



Monica is a great open source personal relationship management system.

## Introduction

Phiên bản docker hóa của monica.

<p align="center">

![Screenshot of the application](docs/images/main-app.png)

</p>

### Ưu điểm

- Sử dụng docker để cài đặt Monica
- Cài đặt đơn giản, không cần code sẵn có của Monica hay laravel.

## Get started
1. Gen APP_KEY bằng lệnh

```echo -n 'base64:'; openssl rand -base64 32```
2. Tạo file `.env`:

``cp .env.example .env``

3. Sửa APP_KEY trong .env bằng giá trị vừa tạo
4. Build docker image
```docker-compose up -d --build```
5. Check container bằng lệnh:

```docker ps```

Nếu xuất hiện image monica_app thì đã build thành công

6. Truy cập với URL: http://localhost:8080

7. Đăng ký. Sau đó xác nhận email (check link mail xác nhân trong  log)





### Requirements
- Bắt đầu chỉ với các file sau:
`docker-compose.yml`, `.env`, `Dockerfile` và 1 thư mục `code` để chứa toàn bộ mã nguồn của Monica.



