
pragma solidity ^0.4.6;
contract SmartCurrency {
   mapping (address => Usr ) Users;
    
   struct Usr {
    
    string [] details;
    
    }


 // This is a Type
 struct DocumentStruct{
   // Not possible to pass strings between contracts at this time
   string name;
 string updateString;
  
 }
   

 // This is a namespace where we will store docs of Type DocumentStruct
  mapping(bytes32 => DocumentStruct) public documentStructs;


 // Set values in storage
 function StoreDocument(bytes32 key, string name, string updateString) returns (bool success) {
  documentStructs[key].name  = name;
  documentStructs[key].updateString  = updateString;
 

  return true;
 }
 
}