# Installing Minikube on Ubuntu VM

## References

- [Certified Kubernetes Application Developer (CKAD), 2nd Edition, 4.3 Installing Minikube on Ubuntu. O'Reilly Course](https://learning.oreilly.com/videos/certified-kubernetes-application/9780137841509/9780137841509-CKAD_01_04_03/)

## Clone the course repository

On the ubuntu vm clone the ckad project

```
> git clone https://github.com/sandervanvugt/ckad.git
```

## Install Minikub

Change directory to the cloned ckad project and run the minikube install script

```
> cd ./ckad
> ./minikube-docker-setup.sh
```

## Start MiniKube

run the following command to start minikube:

```
> minikube start --vm-driver=docker --cni=calico
```

## Test your install

Test your install with the following command
```
> kubectl get all
```

Example:
```
> kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   4d14h
```