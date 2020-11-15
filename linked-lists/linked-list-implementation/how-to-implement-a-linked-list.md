# How to Implement a Linked List

## What is a linked list
A linked list is a linear data structure. It consists of nodes that are linked together using pointers. Each node points to a different node. Nodes aren't stored contiguously in memory.

## What is needed in a linked list
A linked list requires nodes, each of which contains a value and has reference to the next node that it points to.

A linked list also requires a head, which references the starting node of the linked list.

## Implementing a linked list
### Creating a ListNode class
Create a class -- it can be called ListNode. The ListNode constructor parameter accepts a value and and assigns the value to the class property `val`. 

Create a second class property called next. Assign the null to next.

### Creating a LinkedList class
Create a class called LinkedList.

The constructor has one parameter that accepts a head or the starting node. Assign head to the class property `head`.

If an argument isn't passed through the constructor, then the linked list can be initialized with null as the default head value.

### Creating the Linked List
To create the head of the linked list, we'd first need to initialize a node instance. 

And if we want the head to point to a second node, thus truly beginning our list, we also want to initialize a second node instance and point the first one to it.

Initialize a linked list by passing the first node or head as an argument. 