# Linux 基本命令

## 相关知识

[冴羽博客 - 一份前端够用的 Linux 命令](https://github.com/mqyqingfeng/Blog/issues/239)

## rm 删除文件夹

```shell
rm -r filename
```

## ls 列出文件和目录

```shell
# 列出文件
ls

# -a 参数列出所有
ls -a
```

## pwd 显示当前目录

```shell
root@VM-20-12-debian:/var/www# pwd
/var/www
```

## mkdir 创建目录

1. `mkdir` 创建目录

```shell
mkdir folder_name
```

2. `mkdir -p` 递归创建目录

```shell
mkdir -p root/child/child
```

## touch 创建文件

```shell
touch new_file
```
