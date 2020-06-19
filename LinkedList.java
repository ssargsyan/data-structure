import java.io.*;

public class LinkedList {
  Node head;

  static class Node {
    int data;
    Node next;

    Node(int data) {
      this.data = data;
      this.next = null;
    }
  }

  public static LinkedList insert(LinkedList list, int data) {
    Node new_node = new Node(data);
    if (list.head == null) {
      list.head = new_node;
    } else {
      Node last = list.head;
      while (last.next != null) {
        last = last.next;
      }
      last.next = new_node;
    }

    return list;
  }

  public static LinkedList deleteByKey(LinkedList list, int key) {
    Node currNode = list.head, prev = null;

    if (currNode != null && currNode.data == key) {
      list.head = currNode.next;
      System.out.println("\n" + key + " found and deleted");
      return list;
    }

    while (currNode != null && currNode.data != key) {
      prev = currNode;
      currNode = currNode.next;
    }

    if (currNode != null) {
      prev.next = currNode.next;
      System.out.println("\n" + key + " found and deleted");
    } else {
      System.out.println("\n" + key + " not found");
    }

    return list;
  }

  public static LinkedList deleteAtPosition(LinkedList list, int index) {
    Node currNode = list.head, prev = null;

    if (index == 0 && currNode != null) {
      list.head = currNode.next;
      System.out.println("\n" + index + " position element deleted");
      return list;
    }

    int counter = 0;
    while (currNode != null) {
      if (counter == index) {
        prev.next = currNode.next;
        System.out.println("\n" + index + " position element deleted");
        break;
      } else {
        prev = currNode;
        currNode = currNode.next;
        counter++;
      }
    }

    if (currNode == null) {
      System.out.println("\n" + index + " position element not found");
    }

    return list;
  }

  public static void printList(LinkedList list) {
    Node currNode = list.head;

    System.out.print("\nLinkedList is: ");
    while (currNode != null) {
      System.out.print(currNode.data + " ");
      currNode = currNode.next;
    }
  }

  public static void main(String[] args) {
    LinkedList list = new LinkedList();

    list = insert(list, 1);
    list = insert(list, 2);
    list = insert(list, 3);
    list = insert(list, 4);
    list = insert(list, 5);

    printList(list);

    deleteByKey(list, 1);

    printList(list);

    deleteByKey(list, 3);

    printList(list);

    deleteByKey(list, 10);

    printList(list);

    deleteAtPosition(list, 0);

    printList(list);

    deleteAtPosition(list, 2);

    printList(list);

    deleteAtPosition(list, 10);

    printList(list);
  }
}
