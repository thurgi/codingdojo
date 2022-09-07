# Pixelwar
Coding dojo

Qu'est ce que l'on veux que ça fasse?

Gérer le caneva,
Le stocker, **OK**
Le mettre à jour, **OK**
Le mettre à disposition à n utilisateurs
- Envoyer le Canva vers l'extérieur (du programme)
  1. Tester l'envoi d'un placeholder  - ok
  2. Découper notre Canvas en vec<u8> (serialisation) - ok
     1. Envoi que d'une liste de couleur -> 8b 
     2. Pas d'envoi de la position mais envoi de la taille du canva (une seule fois)-> 16b pour x 16b pour y -> au démarrage
     3. userId en envoi séparé -> Question sur l'intérêt de l'info
     4. Découpage du canva en 5 x 8b (pos X, pos Y, couleur) - ok
  3. Tester l'envoi (nc.. whatever) - ok
  4. Déporter notre logique de l'envoi dans un module - todo
  5. Découpage de la logique en 3 thread - DB - LISTEN - SEND avec une queue FIFO. - todo
      - En cours de rédaction du listener - OK
      - Rédaction du sender - EN COURS
      - Création de la queue (`Arc<Mutex>`)
      - Thread database
      - Gestion de la configuration
      - Gestion de l'arrêt de la DB


- Envoyer les données.
  - la carte est lue dans le sens de lecture

- Recevoir des données
  - Permettre de mettre à jour une donnée (pixelColor et/ou userId à une position)

Les position sont défini en binaire

Les contraintes => entrée, sortie, forte sollicitation

# Pour la prochaine séance :
- Débuggage du listener => todo par Fred dans son temps libre
- Mise en place du buffer