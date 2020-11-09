不同用户登录不同的gitlab和github
设置密钥进行区分
mkdir .ssh 生成密钥文件
1. ssh-keygen -t rsa -C "登录的gitlab或github的邮箱"
2. 将生成的密钥添加到相应的仓库里面
3. 在./ssh里面添加config
Host github
    Port 22 //自定义的端口。默认为22，可不配置
    User git //自定义的用户名，默认为git，可不配置
    HostName github.com //真正连接的服务器地址(地址栏的服务器名)
    PreferredAuthentications publickey //指定优先使用哪种方式验证，支持密码和秘钥验证方式
    IdentityFile ~/.ssh/github_id-rsa  //指定本次连接使用的密钥文件（添加的密钥文件）
Host gitlab
    Port 22
    User git
    HostName gitlab.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/gitlab_id-rsa

4. 测试是否连接成功  ssh -T git@'HostName'

git 命令
 git remote add origin '仓库地址'  //添加的远程仓库地址
 git checkout -b 本地分支名 origin/远程分支  //可以直接跳转分支
 git checkout 分支名  //切换分支
 git push origin :仓库分支名  //将本地的分支推送到远程