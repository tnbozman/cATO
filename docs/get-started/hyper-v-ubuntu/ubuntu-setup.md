# Setting Up Ubuntu

Before starting, ensure your VM is started and running

## Install basic dependencies

Run the following cmd to install:

- net-tools: enables interface config to be inspected to find the vm's ip address
- openssh-server: ssh 
- git: install git version control application
- vim: terminal text editor (feel free to byo)

```
> sudo apt intstall net-tools openssh-server git vim
```

## Establishing SSH between Windows and Ubuntu VM

### Step 1 - Find the Ubuntu Ethernet 0 Ip Address

- within the Ubuntu vm open a terminal
- run ifconfig command 

```
> ifconfig
```

- find the eth0 interface in the ifconfig result
- figure below, the ip address is 172.25.181.200

![ubuntu ifconfig](/ubuntu-eth0.png)

### Step 2 - Test ssh connection between Windows Host and Ubuntu VM

- Within windows open a command prompt
- connect to your vm using ssh to the vm eth0 ip address
```
> ssh {username}@{eth0}
```

For the ip address:

```
> ssh dev-user@172.25.181.200
```

Example result would be:

```
> ssh dev-user@172.25.181.200
dev-user@172.25.181.200's password:
Welcome to Ubuntu 20.04.4 LTS (GNU/Linux 5.4.0-117-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

245 updates can be applied immediately.
179 of these updates are standard security updates.
To see these additional updates run: apt list --upgradable

Last login: Thu Dec  8 21:04:05 2022 from 172.29.0.1
```
### Step 3 - Generate SSH Keys
Now we have verified ssh is working correctly, we will add ssh certificates so we no longer require a password login.

```
> ssh-keygen -t ed25519 -C "unique name to identify this key"
```

Example:

```
> ssh-keygen -t ed25519 -C "ubuntu-cato"
Generating public/private ed25519 key pair.
Enter file in which to save the key (C:\Users\{your-username}/.ssh/id_ed25519): C:\Users\{your-username}\.ssh\ubuntu-cato
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in C:\Users\{your-username}\.ssh\ubuntu-cato
Your public key has been saved in C:\Users\{your-username}\.ssh\ubuntu-cato.pub
The key fingerprint is:
SHA256:4+SS+RXTM5JKhkgldfkgldfP0/SYgz32jfkds6So ubuntu-cato
The key's randomart image is:
.......

```

### Step 4 - Copy Public SSH Key to Ubuntu VM

The following commands run on windows will tranfer the public key to the Ubuntu VM:
```
> scp -i C:\Users\{windows-username}\.ssh\ubuntu-cato.pub {ubuntu-username}@172.25.181.200:/home/{ubuntu-username}/.ssh/authorized_keys
```

Example:
NOTE: Replace {windows-username}

```
> scp -i C:\Users\{windows-username}\.ssh\ubuntu-cato.pub dev-user@172.25.181.200:/home/dev-user/.ssh/authorized_keys
```

It will ask you to try 'yes' to connect and provide your ubuntu user password.

### Step 5 - Add SSH Config on Windows

At C:\Users\{windows-username}\.ssh\config add an entry for your Ubuntu VM and private key

.ssh\config
```
Host {host-title}
    HostName {vm-ipaddress}
    IdentityFile C:\Users\{windows-username}\.ssh\{ssh-private-key}
```

Example:
NOTE: Replace {windows-username}
```
Host cato-cm
    HostName 172.25.181.200
    IdentityFile C:\Users\{windows-username}\.ssh\ubuntu-cato
```

## Using Visual Studio Code as your SSH Client

Reference:
 - [VS Code - Remote Development using SSH](https://code.visualstudio.com/docs/remote/ssh)

Install the following vscode extension:
```
ms-vscode-remote.vscode-remote-extensionpack
```

![ms-vscode-remote.vscode-remote-extensionpack](/vscode-remote-dev-extensionpack.png)

Open the Remote Development panel

![Remote Development panel](/remote-development-panel.png)

As we added the Ubuntu VM (cato-vm) to the Windows ssh config in step 5 of the last section the vm should be visible as an ssh target.

With the ssh keys configured you should be able to click on the folder icon beside cato-vm to explore the ubuntu vm and open an ssh session at a folder within vs code on windows.