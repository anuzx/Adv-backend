1.)if any new developer comes they may import GameManager instead of gameManager in lets say db.ts file and it will not give any red squiggly , hence here singleton pattern is useful 

2.) singleton pattern: it says if there is something that you want to be initialised only once so that even by mistake no one can create new instance of it ,to apply singleton class pattern make constructor private

3.)we can never do GameManager.addMove( ) , we need to create an obj out of it only then we can call addMove , eg: gameManager.addMove()

4.)if we create a fn that is static lets say : static clear(){} , then we can call it directly on the class and not required to make a obj
