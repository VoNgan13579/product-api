# Sử dụng image Node.js chính thức phiên bản ổn định (LTS)
FROM node:20-alpine

# Tạo thư mục làm việc bên trong container
WORKDIR /usr/src/app

# Copy file package.json và package-lock.json trước để tận dụng Docker cache
COPY package*.json ./

# Cài đặt các dependencies trong container
RUN npm install

# Copy toàn bộ mã nguồn còn lại của dự án vào container
COPY . .

# Mở port 3000 của container ra ngoài
EXPOSE 3000

# Lệnh để khởi chạy ứng dụng khi container bắt đầu chạy
CMD ["npm", "start"]