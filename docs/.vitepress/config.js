export default {
    title: 'cATO',
    description: 'Knowledge management of cATO practices',
    appearance: true,
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: 'Getting Started', link: '/get-started/' },
            { text: 'Software Factory', link: '/software-factory/' },
            { text: 'Container Certification', link: '/container-certification/' },
            { text: 'Containerisation Platform', link: '/container-platform/' },
          ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/get-started/' },
              { text: 'Ubuntu VM on windows', link: '/get-started/hyper-v-ubuntu/' },
              { text: 'Setting up Ubuntu', link: '/get-started/hyper-v-ubuntu/ubuntu-setup' },
              { text: 'Minikube on Ubuntu', link: '/get-started/ubuntu-minikube/' },
              { text: 'Minikube Setup', link: '/get-started/ubuntu-minikube/minikube-setup' }
            ]
          },
            {
              text: 'Software Factory',
              items: [
                { text: 'Introduction', link: '/software-factory/' },
                { text: 'Jenkins', link: '/software-factory/jenkins/' },
                { text: 'Vitepress', link: '/software-factory/vitepress/' },
                { text: 'Dev Containers', link: '/software-factory/devcontainers/' },
              ]
            },
            {
              text: 'Container Certification',
              items: [
                { text: 'Introduction', link: '/container-certification/' },
              ]
            },
            {
              text: 'Containerisation Platform',
              items: [
                { text: 'Introduction', link: '/container-platform/' },
                { text: 'Kubernetes', link: '/container-platform/k8/' },
                { text: 'Service Mesh', link: '/container-platform/service-mesh/' },
              ]
            }
        ]
    }
}