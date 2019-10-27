#include<vector>
#include<iostream>
using namespace std;

// public anyone access including external
// protected, only children and my methods can access
// private only my methods may access these parts

// special case friend can access private and protected
// access means you can't use or call them 

// non-leaky abstractions follow encapsulation

// when passing a parmeter straight into a function, that uses the COPY CONSTRUCTOR
// dtor called at the end of stack finish as well
// If you return the node as the object itself, it will copy it self on to the stack!! it's used alot 
// That's why u need to make the copy constructor as if you return a node with branches, you need to deep copy it out