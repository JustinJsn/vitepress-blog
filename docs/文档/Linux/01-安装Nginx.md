# Nginx

## 相关知识

[冴羽博客 - 一份简单够用的 Nginx Location 配置讲解](https://github.com/mqyqingfeng/Blog/issues/242)

## 安装

```shell
# Debian
# 安装
sudo apt install nginx

# 启用 Nginx
systemctl start nginx

# 设置为在系统启动时自动启动
systemctl enable nginx
```

## 启动错误问题

```shell
nginx.service: Failed with result 'exit-code'.
Failed to start A high performance web server and a reverse proxy server.
```

如果启动 nginx 出现以上错误，是因为 apache 服务把 nginx 的端口占用了，停止 apache 即可

```shell
# 停止 apache 服务
sudo /etc/init.d/apache2 stop

# 重启 Nginx
systemctl restart nginx
```

## 修改配置文件

```shell
# 进入配置文件目录
cd /etc/nginx

# 修改配置内容
cd sites-available

vim default

# 修改配置后需要重启 nginx
systemctl reload nginx
```
