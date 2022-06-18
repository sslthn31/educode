export const JsQuestionData = [
  {
    id: 1,
    question: 'What is JavaScript?',
    options: [
      {
        title: 'JavaScript is a scripting language used to make the website interactive',
        correct: true,
      },
      {
        title: 'JavaScript is an assembly language used to make the website interactive',
        correct: false,
      },
      {
        title: 'JavaScript is a compiled language used to make the website interactive',
        correct: false,
      },
      {
        title: 'None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Which of the following is correct about JavaScript?',
    options: [
      {
        title: 'JavaScript is an Object-Based language',
        correct: true,
      },
      {
        title: 'JavaScript is Assembly-language',
        correct: false,
      },
      {
        title: 'JavaScript is an Object-Oriented language',
        correct: false,
      },
      {
        title: 'JavaScript is a High-level language',
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: 'Among the given statements, which statement defines closures in JavaScript?',
    options: [
      {
        title: 'JavaScript is a function that is enclosed with references to its inner function scope',
        correct: false,
      },
      {
        title: 'JavaScript is a function that is enclosed with references to its lexical environment',
        correct: true,
      },
      {
        title: 'JavaScript is a function that is enclosed with the object to its inner function scope',
        correct: false,
      },
      {
        title: 'None of the mentioned',
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: `What will be the output of the following JavaScript code snippet?
    <p id="demo"></p>
    var txt1 = "Sanfoundry_";
    var txt2 = "Javascriptmcq";
    document.getElementById("demo").innerHTML = txt1 + txt2;`,
    options: [
      {
        title: 'error',
        correct: false,
      },
      {
        title: 'Sanfoundry_ + Javascriptmcq',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: 'Sanfoundry_Javascriptmcq',
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
    <script>
    var js = 10;
    js *= 5;
    document.getElementById("demo").innerHTML = js;
    </script>`,
    options: [
      {
        title: '10',
        correct: false,
      },
      {
        title: '50',
        correct: true,
      },
      {
        title: '5',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: 'Arrays in JavaScript are defined by which of the following statements?',
    options: [
      {
        title: 'It is an ordered list of values',
        correct: true,
      },
      {
        title: 'It is an ordered list of objects',
        correct: false,
      },
      {
        title: 'It is an ordered list of string',
        correct: false,
      },
      {
        title: 'It is an ordered list of functions',
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: `What will be the output of the following JavaScript code?
    JavaScript Comparison Operators
    function compare()
    {
        int num=2;
        char b=2;
        if(a==b)
            return true;
        else
            return false;
    }`,
    options: [
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'compilation error',
        correct: false,
      },
      {
        title: 'runtime error',
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: `What will be the output of the following JavaScript code snippet?
    function equalto()
    {
        int num=10;
        if(num===”10”)
            return true;
        else
            return false;
    }`,
    options: [
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'compilation error',
        correct: false,
      },
      {
        title: 'runtime error',
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: `Will the following JavaScript code work?
    var js = (function(x) {return x*x;}(10));`,
    options: [
      {
        title: 'Exception will be thrown',
        correct: false,
      },
      {
        title: 'Memory leak',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
      {
        title: 'Yes, perfectly',
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: 'Which of the following is not javascript data types?',
    options: [
      {
        title: 'Null type',
        correct: false,
      },
      {
        title: 'Undefined type',
        correct: false,
      },
      {
        title: 'Number type',
        correct: false,
      },
      {
        title: 'All of the mentioned',
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question: 'Where is Client-side JavaScript code is embedded within HTML documents?',
    options: [
      {
        title: 'A URL that uses the special javascript:code',
        correct: false,
      },
      {
        title: 'A URL that uses the special javascript:protocol',
        correct: true,
      },
      {
        title: 'A URL that uses the special javascript:encoding',
        correct: false,
      },
      {
        title: 'A URL that uses the special javascript:stack',
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: `What will be the output of the following JavaScript code snippet?
    int a=1;
    if(a!=null) 
        return 1;
    else
        return 0;`,
    options: [
      {
        title: '0',
        correct: false,
      },
      {
        title: '1',
        correct: true,
      },
      {
        title: 'compiler error',
        correct: false,
      },
      {
        title: 'runtime error',
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: 'Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
    options: [
      {
        title: 'Position',
        correct: true,
      },
      {
        title: 'Window',
        correct: false,
      },
      {
        title: 'Standard',
        correct: false,
      },
      {
        title: 'Location',
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: `What will be the output of the following JavaScript program?
    function sanfoundry(javascript)
    {
      return (javascript ?  “yes” :  “no”);
    }
    bool ans=true;
    console.log(sanfoundry(ans));`,
    options: [
      {
        title: 'Compilation error',
        correct: false,
      },
      {
        title: 'Runtime error',
        correct: false,
      },
      {
        title: 'Yes',
        correct: true,
      },
      {
        title: 'No',
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: `What will be the output of the following JavaScript code?
    function height()
    {	
        var  height = 123.56;
        var type = (height>=190) ? "tall" : "short";
        return type;
    }`,
    options: [
      {
        title: 'short',
        correct: true,
      },
      {
        title: '123.56',
        correct: false,
      },
      {
        title: 'tall',
        correct: false,
      },
      {
        title: '190',
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: 'Which of the following can be used to call a JavaScript Code Snippet?',
    options: [
      {
        title: 'Function/Method',
        correct: true,
      },
      {
        title: 'Preprocessor',
        correct: false,
      },
      {
        title: 'Triggering Event',
        correct: false,
      },
      {
        title: 'RMI',
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question: `What will be the output of the following JavaScript function?
    <p id="demo"></p>
    <script>
    function javascript() 
    {
        document.getElementById("demo").innerHTML = Math.abs(-7.25);
    }
    </script>`,
    options: [
      {
        title: '-7.25',
        correct: false,
      },
      {
        title: '7.25',
        correct: true,
      },
      {
        title: '-7',
        correct: false,
      },
      {
        title: '7',
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: `What will be the output of the following JavaScript function?
    <p id="demo"></p>
    <script>
    function javascript() 
    {
        document.getElementById("demo").innerHTML = Math.abs(-7.25);
    }
    </script>`,
    options: [
      {
        title: '-7.25',
        correct: false,
      },
      {
        title: '7.25',
        correct: true,
      },
      {
        title: '-7',
        correct: false,
      },
      {
        title: '7',
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: 'Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?',
    options: [
      {
        title: 'will work perfectly well on a Windows Machine',
        correct: true,
      },
      {
        title: 'will be displayed as JavaScript text on the browser',
        correct: false,
      },
      {
        title: 'will throw errors and exceptions',
        correct: false,
      },
      {
        title: 'must be restricted to a Unix Machine only',
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question: `Which is a more efficient JavaScript code snippet?
    Code 1 :
    for(var num=10;num>=1;num--)
    {
               document.writeln(num);
    }

    Code 2 :    
    var num=10;
    while(num>=1)
    {
           document.writeln(num);
           num++;
    }`,
    options: [
      {
        title: 'Code 1',
        correct: true,
      },
      {
        title: 'Code 2',
        correct: false,
      },
      {
        title: 'Both',
        correct: false,
      },
      {
        title: 'Cannot Compare',
        correct: false,
      },
    ],
  },
  {
    id: 21,
    question: `What will be the output of the following JavaScript code?
    function printArray(a) 
    {
         var len = a.length, i = 0;
         if (len == 0)
            console.log("Empty Array");
         else 
         {
            do 
             {
                 console.log(a[i]);
             } while (++i < len);
         }
    }`,
    options: [
      {
        title: 'Prints “Empty Array”',
        correct: false,
      },
      {
        title: 'Prints 0 to the length of the array',
        correct: false,
      },
      {
        title: 'Prints the numbers in the array in order',
        correct: true,
      },
      {
        title: 'Prints the numbers in the array in the reverse order',
        correct: false,
      },
    ],
  },
  {
    id: 22,
    question: `What happens in the following JavaScript code snippet?
    var js = 0;
    while (js < 10) 
    {
         console.log(js);
         js++;
    }`,
    options: [
      {
        title: 'An exception is thrown',
        correct: false,
      },
      {
        title: 'The values of js are logged or stored in a particular location or storage',
        correct: false,
      },
      {
        title: 'The value of js from 0 to 9 is displayed in the console',
        correct: true,
      },
      {
        title: 'An error is displayed',
        correct: false,
      },
    ],
  },
  {
    id: 23,
    question: `What will be the output of the following JavaScript code?
    function range(int javascript)
    {
      int a=5;
      for(int i=0;i<javascript;i++)
      {
        console.log(a);
      } 
    }
    range(3);`,
    options: [
      {
        title: '2',
        correct: false,
      },
      {
        title: '5',
        correct: false,
      },
      {
        title: '555',
        correct: true,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 24,
    question: 'Which of the following scoping type does JavaScript use?',
    options: [
      {
        title: 'Sequential',
        correct: false,
      },
      {
        title: 'Segmental',
        correct: false,
      },
      {
        title: 'Lexical',
        correct: true,
      },
      {
        title: 'Literal',
        correct: false,
      },
    ],
  },
  {
    id: 25,
    question: 'What is the basic difference between JavaScript and Java?',
    options: [
      {
        title: 'Functions are considered as fields',
        correct: false,
      },
      {
        title: 'Functions are values, and there is no hard distinction between methods and fields',
        correct: true,
      },
      {
        title: 'Variables are specific',
        correct: false,
      },
      {
        title: 'There is no difference',
        correct: false,
      },
    ],
  },
  {
    id: 26,
    question: `What will be the output of the following JavaScript code?
    var quiz=[1,2,3];  
    var js=[6,7,8];  
    var result=quiz.concat(js);  
    document.writeln(result);`,
    options: [
      {
        title: '1, 2, 3, 6, 7, 8',
        correct: true,
      },
      {
        title: '123',
        correct: false,
      },
      {
        title: '1, 2, 3',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 27,
    question: 'Why JavaScript Engine is needed?',
    options: [
      {
        title: 'Both Compiling & Interpreting the JavaScript',
        correct: false,
      },
      {
        title: 'Parsing the javascript',
        correct: false,
      },
      {
        title: 'Interpreting the JavaScript',
        correct: true,
      },
      {
        title: 'Compiling the JavaScript',
        correct: false,
      },
    ],
  },
  {
    id: 28,
    question: `What will be the function of the following JavaScript program?
    var scope = "js scope";
    function checkscope() 
    {
        var scope = "javascript scope"; 
        function f() 
        { 
             return scope; 
        }
        return f;
    }`,
    options: [
      {
        title: 'Returns the value in scope',
        correct: true,
      },
      {
        title: 'Returns value null',
        correct: false,
      },
      {
        title: 'Shows an error message',
        correct: false,
      },
      {
        title: 'Returns exception',
        correct: false,
      },
    ],
  },
  {
    id: 29,
    question: `What will be the output of the following JavaScript code?
    int a=0;
    for(a;a<5;a++);
    console.log(a)`,
    options: [
      {
        title: '4',
        correct: false,
      },
      {
        title: '5',
        correct: true,
      },
      {
        title: '0',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 30,
    question: 'Which of the following methods/operation does javascript use instead of == and !=?',
    options: [
      {
        title: 'JavaScript uses equalto()',
        correct: false,
      },
      {
        title: 'JavaScript uses equals() and notequals() instead',
        correct: false,
      },
      {
        title: 'JavaScript uses bitwise checking',
        correct: false,
      },
      {
        title: 'JavaScript uses === and !== instead',
        correct: true,
      },
    ],
  },
  {
    id: 31,
    question: `What will be the result or type of error if p is not defined in the following JavaScript code snippet?
    console.log(p)`,
    options: [
      {
        title: 'Value not found Error',
        correct: false,
      },
      {
        title: 'Reference Error',
        correct: true,
      },
      {
        title: 'Null',
        correct: false,
      },
      {
        title: 'Zero',
        correct: false,
      },
    ],
  },
  {
    id: 32,
    question: `What is the prototype represents in the following JavaScript code snippet?
    function javascript() {};`,
    options: [
      {
        title: 'Not valid',
        correct: false,
      },
      {
        title: 'Prototype of a function',
        correct: false,
      },
      {
        title: 'Function javascript',
        correct: false,
      },
      {
        title: 'A custom constructor',
        correct: true,
      },
    ],
  },
  {
    id: 33,
    question: 'Why event handlers is needed in JS?',
    options: [
      {
        title: 'Allows JavaScript code to alter the behaviour of windows',
        correct: true,
      },
      {
        title: 'Adds innerHTML page to the code',
        correct: false,
      },
      {
        title: 'Change the server location',
        correct: false,
      },
      {
        title: 'Performs handling of exceptions and occurrences',
        correct: false,
      },
    ],
  },
  {
    id: 34,
    question: 'Which of the following isnot a framework',
    options: [
      {
        title: 'JavaScript .NET',
        correct: false,
      },
      {
        title: 'Javascript',
        correct: true,
      },
      {
        title: 'Cocoa Js',
        correct: false,
      },
      {
        title: 'JQuery',
        correct: false,
      },
    ],
  },
  {
    id: 35,
    question: 'Which of the following is the property that is triggered in response to JS errors?',
    options: [
      {
        title: 'onclick',
        correct: false,
      },
      {
        title: 'onerror',
        correct: true,
      },
      {
        title: 'onmessage',
        correct: false,
      },
      {
        title: 'onexception',
        correct: false,
      },
    ],
  },
  {
    id: 36,
    question: `What will be the output of the following JavaScript code?
    var string1 = ”123”;
    var intvalue = 123;
    alert( string1 + intvalue );
    `,
    options: [
      {
        title: '123246',
        correct: false,
      },
      {
        title: '246',
        correct: false,
      },
      {
        title: '123123',
        correct: true,
      },
      {
        title: 'exception',
        correct: false,
      },
    ],
  },
  {
    id: 37,
    question: 'A function definition expression can be called as',
    options: [
      {
        title: 'Function prototype',
        correct: false,
      },
      {
        title: 'Function literal',
        correct: true,
      },
      {
        title: 'Function calling',
        correct: false,
      },
      {
        title: 'Function declation',
        correct: false,
      },
    ],
  },
  {
    id: 38,
    question: 'The property of a primary expression is',
    options: [
      {
        title: 'stand-alone expressions',
        correct: true,
      },
      {
        title: 'basic expressions containing all necessary functions',
        correct: false,
      },
      {
        title: 'contains variable refrences alone',
        correct: false,
      },
      {
        title: 'contains only keywords',
        correct: false,
      },
    ],
  },
  {
    id: 39,
    question: `var text = "testing: 1, 2, 3"; // Sample text
    var pattern = /\d+/g // Matches all instances of one or more digits
    In order to check if the pattern matches with the string “text”, the statement is`,
    options: [
      {
        title: 'text==pattern',
        correct: false,
      },
      {
        title: 'text.equals(pattern)',
        correct: false,
      },
      {
        title: 'text.test(pattern)',
        correct: false,
      },
      {
        title: 'pattern.test(text)',
        correct: true,
      },
    ],
  },
  {
    id: 40,
    question: 'The expression of calling (or executing) a function or method in JavaScript is called',
    options: [
      {
        title: 'Primary expression',
        correct: false,
      },
      {
        title: 'Object Creation Expression',
        correct: true,
      },
      {
        title: 'Invocation Expression',
        correct: false,
      },
      {
        title: 'Constructor Calling Expression',
        correct: false,
      },
    ],
  },
  {
    id: 41,
    question: 'What kind of expression is “new Point(2,3)”?',
    options: [
      {
        title: 'Primary expression',
        correct: false,
      },
      {
        title: 'Functional expression',
        correct: false,
      },
      {
        title: 'Invocation expression',
        correct: true,
      },
      {
        title: 'Property Access Expression',
        correct: false,
      },
    ],
  },
  {
    id: 42,
    question: 'Which of the operator is used to test if a particular property exists or not?',
    options: [
      {
        title: 'in',
        correct: true,
      },
      {
        title: 'exist',
        correct: false,
      },
      {
        title: 'within',
        correct: false,
      },
      {
        title: 'exists',
        correct: false,
      },
    ],
  },
  {
    id: 43,
    question: 'Among the following, which one is a ternary operator?',
    options: [
      {
        title: '+',
        correct: false,
      },
      {
        title: ':',
        correct: false,
      },
      {
        title: '-',
        correct: false,
      },
      {
        title: '?:',
        correct: true,
      },
    ],
  },
  {
    id: 44,
    question: 'An expression that can legally appear on the left side of an assignment expression.” is a well known explanation for variables, properties of objects, and elements of arrays. They are called',
    options: [
      {
        title: 'Properties',
        correct: false,
      },
      {
        title: 'Prototypes',
        correct: false,
      },
      {
        title: 'Lvalue',
        correct: true,
      },
      {
        title: 'Definition',
        correct: false,
      },
    ],
  },
  {
    id: 45,
    question: `What will be the output of the following JavaScript code?
    function output(option)
    {
      return (option ?  “yes” :  “no”);
    }
      bool ans=true;
    console.log(output(ans));`,
    options: [
      {
        title: 'Yes',
        correct: true,
      },
      {
        title: 'No',
        correct: false,
      },
      {
        title: 'Runtime error',
        correct: false,
      },
      {
        title: 'Compilation error',
        correct: false,
      },
    ],
  },
  {
    id: 46,
    question: `What will be the output of the following JavaScript code?
    var  obj=
    {
      length:20,
      height:35,
    }
    if (‘breadth' in obj === false) 
    {
        obj.breadth = 12;
    }
    console.log(obj.breadth);`,
    options: [
      {
        title: '20',
        correct: false,
      },
      {
        title: '12',
        correct: true,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 47,
    question: `What will be the output of the following JavaScript code?

    function height()
    {	
        var  height = 123.56;
        var type = (height>=190) ? "tall" : "short";
        return type;
    }`,
    options: [
      {
        title: '123.56',
        correct: false,
      },
      {
        title: '190',
        correct: false,
      },
      {
        title: 'tall',
        correct: false,
      },
      {
        title: 'short',
        correct: true,
      },
    ],
  },
  {
    id: 48,
    question: `What will be the output of the following JavaScript code?
    string  a = ”hi”;
    string  b = ”there”;
    alert(a+b);`,
    options: [
      {
        title: 'hi',
        correct: false,
      },
      {
        title: 'there',
        correct: false,
      },
      {
        title: 'hithere',
        correct: true,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 49,
    question: `What will be the output of the following JavaScript code?
    function output(object)
    {
      var place=object ? object.place : “Italy”;
      return “clean:”+ place;
    }
    console.log(output({place:India}));`,
    options: [
      {
        title: 'clean:India',
        correct: true,
      },
      {
        title: 'clean:Italy',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 50,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
    <script>
    function myFunction() 
    {
      document.getElementById("demo").innerHTML = Math.abs(-7.25);
    }
    </script>`,
    options: [
      {
        title: '7.25',
        correct: true,
      },
      {
        title: '-7.25',
        correct: false,
      },
      {
        title: '7',
        correct: false,
      },
      {
        title: '-7',
        correct: false,
      },
    ],
  },
  {
    id: 51,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
    <script>
    function myFunction() 
    {
        document.getElementById("demo").innerHTML = Math.acos(0.5);
    }
    </script>`,
    options: [
      {
        title: '1.01',
        correct: false,
      },
      {
        title: '1.047',
        correct: true,
      },
      {
        title: '1.00',
        correct: false,
      },
      {
        title: '1.4',
        correct: false,
      },
    ],
  },
  {
    id: 52,
    question: 'A conditional expression is also called a',
    options: [
      {
        title: 'Alternative to if-else',
        correct: false,
      },
      {
        title: 'Immediate if',
        correct: true,
      },
      {
        title: 'If-then-else statement',
        correct: false,
      },
      {
        title: 'Switch statement',
        correct: false,
      },
    ],
  },
  {
    id: 53,
    question: 'What is a block statement in JavaScript?',
    options: [
      {
        title: 'conditional block',
        correct: false,
      },
      {
        title: 'block that contains a single statement',
        correct: false,
      },
      {
        title: 'both conditional block and a single statement',
        correct: false,
      },
      {
        title: 'block that combines multiple statements into a single compound statement',
        correct: true,
      },
    ],
  },
  {
    id: 54,
    question: 'The “var” and “function” are ',
    options: [
      {
        title: 'Keywords',
        correct: false,
      },
      {
        title: 'Declaration statements',
        correct: true,
      },
      {
        title: 'Data types',
        correct: false,
      },
      {
        title: 'Prototypes',
        correct: false,
      },
    ],
  },
  {
    id: 55,
    question: `In the following switch syntax, the expression is compared with the case labels using which of the following operator(s)?
    switch(expression)
    {
        statements
    }`,
    options: [
      {
        title: '==',
        correct: false,
      },
      {
        title: 'equals',
        correct: false,
      },
      {
        title: 'equal',
        correct: false,
      },
      {
        title: '===',
        correct: true,
      },
    ],
  },
  {
    id: 56,
    question: `What happens in the following javaScript code snippet?
    var count = 0;
    while (count < 10) 
    {
         console.log(count);
         count++;
    }`,
    options: [
      {
        title: 'The values of count are logged or stored in a particular location or storage',
        correct: false,
      },
      {
        title: 'The value of count from 0 to 9 is displayed in the console',
        correct: true,
      },
      {
        title: 'An error is displayed',
        correct: false,
      },
      {
        title: 'An exception is thrown',
        correct: false,
      },
    ],
  },
  {
    id: 57,
    question: 'The enumeration order becomes implementation dependent and non-interoperable if',
    options: [
      {
        title: 'If the object inherits enumerable properties',
        correct: true,
      },
      {
        title: 'The object does not have the properties present in the integer array indices',
        correct: false,
      },
      {
        title: 'The delete keyword is never used',
        correct: false,
      },
      {
        title: 'Object.defineProperty() is not used',
        correct: false,
      },
    ],
  },
  {
    id: 58,
    question: `What will be the output of the following JavaScript code?
    Int a=1;
    if(a>10)
    {  
        document.write(10);  
    } 
    else
    {
        document.write(a);  
    }`,
    options: [
      {
        title: '10',
        correct: false,
      },
      {
        title: '0',
        correct: false,
      },
      {
        title: '1',
        correct: true,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 59,
    question: `var grade='B';  
    var result;  
    switch(grade)
    {  
        case 'A':
        {  
            result+="10"; 
            break;
        } 
        case 'B':
        {  
            result+=" 9";
            break;
        }  
        case 'C':
        {  
            result+=" 8";
            break;
        }  
        default:  
        result+=" 0";  
    }  
    document.write(result);`,
    options: [
      {
        title: '10',
        correct: false,
      },
      {
        title: '0',
        correct: true,
      },
      {
        title: '1',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 59,
    question: `What will be the output of the following JavaScript code?
    var grade='A';  
    var result;  
    switch(grade)
    {  
        case 'A':  
            result+="10";  
        case 'B':  
            result+=" 9";  
        case 'C':  
            result+=" 8";  
        default:  
            result+=" 0";  
    }  
    document.write(result);`,
    options: [
      {
        title: '10',
        correct: false,
      },
      {
        title: '27',
        correct: true,
      },
      {
        title: '8',
        correct: false,
      },
      {
        title: '0',
        correct: false,
      },
    ],
  },
  {
    id: 60,
    question: `What will be the output of the following JavaScript code?
    int a=4;
    int b=1;
    int c=0;
    If(a==b)
        document.write(a);
    else if(a==c)
        document.write(a);
    else
        document.write(c);`,
    options: [
      {
        title: '4',
        correct: false,
      },
      {
        title: '1',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
      {
        title: '0',
        correct: true,
      },
    ],
  },
  {
    id: 61,
    question: `What will be the output of the following JavaScript code?
    var grade='E';  
    var result;  
    switch(grade)
    {  
        case 'A':  
            result+="10";  
        case 'B':  
            result+=" 9";  
        case 'C':  
            result+=" 8";  
        default:  
            result+=" 0";  
    }  
    document.write(result);`,
    options: [
      {
        title: '10',
        correct: false,
      },
      {
        title: '0',
        correct: true,
      },
      {
        title: '18',
        correct: false,
      },
      {
        title: '17',
        correct: false,
      },
    ],
  },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    array.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return array;
};

shuffle(JsQuestionData);
console.log(shuffle(JsQuestionData));
