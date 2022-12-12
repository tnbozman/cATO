# Preparing an Ubuntu VM on Windows

## Windows Only
These instructions are for Windows Only

## Ensure virtualisation is enabled and Hyper-V is installed

### Bios - Virtualisation 
This is computer dependent. It is generally safe to assume virtualisation is enabled within your bios.
If you run into issues in the following step you should check your bios settings using your laptop's user guide.

### Install hyper-v

In the search bar type 'windows features' and you should see an option 'Turn Windows Features on or off'
![Windows Features](/windows-features.png)

For more details read the docs [here](https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)

## Establishing an Ubuntu VM using Hyper-V 

With Hyper-V installed search 'hyper-v' and open 'Hyper-V quick create'

:warning: Ensure you have stable internet connection before trying to create the vm as it needs to download the ubuntu image

Select Ubuntu 20.04 LTS and select 'Create Virtual Machine' 

![hyper-v](/hyper-v-quick-create-ubuntu.png)

:warning: You are free to use any username, however through this guide the linux user will be 'dev-user'


For more details read the docs [here](https://wiki.ubuntu.com/Hyper-V)

## Ubuntu VM settings

Ensure the VM has the following settings as a minimum:
- RAM: 4GB
- CPUs: 2

Under Network Settings, set MAC Address to static.
This seems to keep the IP Address static which is useful when connecting via ssh.

![Static MAC Address](/static-mac.png)
