# How to deploy on minikube

minikube start
eval $(minikube docker-env)
docker build -t portfolio-website .
kubectl apply -f deployment.yaml&& kubectl apply -f service.yaml
minikube service portfolio-website --url

