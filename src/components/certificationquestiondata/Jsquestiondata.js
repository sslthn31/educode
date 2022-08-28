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
    var pattern = /d+/g // Matches all instances of one or more digits
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
    if (breadth in obj === false) 
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
  {
    id: 62,
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
        title: 'Prints the numbers in the array in order',
        correct: true,
      },
      {
        title: 'Prints the numbers in the array in the reverse order',
        correct: false,
      },
      {
        title: 'Prints 0 to the length of the array',
        correct: false,
      },
      {
        title: 'Prints “Empty Array”',
        correct: false,
      },
    ],
  },
  {
    id: 63,
    question: 'What are the three important manipulations done in a for loop on a loop variable?',
    options: [
      {
        title: 'Updation, Incrementation, Initialization',
        correct: false,
      },
      {
        title: 'Initialization,Testing, Updation',
        correct: true,
      },
      {
        title: 'Testing, Updation, Testing',
        correct: false,
      },
      {
        title: 'Initialization, Testing, Incrementation',
        correct: false,
      },
    ],
  },
  {
    id: 64,
    question: `What will the following JavaScript code snippet work? If not, what will be the error?
    function tail(o) 
    { 
        for (; o.next; o = o.next) ;
        return o;
    }`,
    options: [
      {
        title: 'This will throw an exception as only numerics can be used in a for loop',
        correct: false,
      },
      {
        title: 'This will not iterate',
        correct: false,
      },
      {
        title: 'This will work',
        correct: true,
      },
      {
        title: 'This will result in a runtime error with the message “Cannot use Linked List',
        correct: false,
      },
    ],
  },
  {
    id: 65,
    question: 'One of the special features of an interpreter in reference with the for loop is that',
    options: [
      {
        title: 'Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property',
        correct: true,
      },
      {
        title: 'The iterations can be infinite when an interpreter is used',
        correct: false,
      },
      {
        title: 'The body of the loop is executed only once',
        correct: false,
      },
      {
        title: 'The iteration is finite when an interpreter is used',
        correct: false,
      },
    ],
  },
  {
    id: 66,
    question: 'What will happen if the body of a for/in loop deletes a property that has not yet been enumerated?',
    options: [
      {
        title: 'The property will be stored in a cache',
        correct: false,
      },
      {
        title: 'The loop will not run',
        correct: false,
      },
      {
        title: 'That property will not be enumerated',
        correct: true,
      },
      {
        title: 'The property will be enumerated',
        correct: false,
      },
    ],
  },
  {
    id: 67,
    question: 'What will be the step of the interpreter in a jump statement when an exception is thrown?',
    options: [
      {
        title: 'The interpreter stops its workThe interpreter stops its work',
        correct: false,
      },
      {
        title: 'The interpreter throws another exception',
        correct: false,
      },
      {
        title: 'The interpreter jumps to the nearest enclosing exception handler',
        correct: true,
      },
      {
        title: 'The interpreter throws an error',
        correct: false,
      },
    ],
  },
  {
    id: 68,
    question: `What will be the role of the continue keyword in the following JavaScript code snippet?
    while (a != 0)
    {
       if (a == 1) 
           continue;
       else 
           a++;
    }`,
    options: [
      {
        title: 'The continue keyword restarts the loop',
        correct: false,
      },
      {
        title: 'The continue keyword skips the next iteration',
        correct: false,
      },
      {
        title: 'The continue keyword skips the rest of the statements in that iteration',
        correct: true,
      },
      {
        title: 'The continue keyword breaks out of the loop',
        correct: false,
      },
    ],
  },
  {
    id: 69,
    question: `What could be the task of the statement debugger in the following JavaScript code?
    function f(o) 
    {
         if (o === undefined) debugger;
    }`,
    options: [
      {
        title: 'It does nothing but a simple breakpoint',
        correct: true,
      },
      {
        title: 'It debugs the error in that statement and restarts the statements execution',
        correct: false,
      },
      {
        title: 'It is used as a keyword that debugs the entire program at once',
        correct: false,
      },
      {
        title: 'It is used to find error in the statement',
        correct: false,
      },
    ],
  },
  {
    id: 70,
    question: 'Among the keywords below, which one is not a statement?',
    options: [
      {
        title: 'debugger',
        correct: false,
      },
      {
        title: 'with',
        correct: false,
      },
      {
        title: 'if',
        correct: false,
      },
      {
        title: 'use strict',
        correct: true,
      },
    ],
  },
  {
    id: 71,
    question: `What will be the output of the following JavaScript code?
    let a = 0;
    for(a;a<5;a++);
    console.log(a);`,
    options: [
      {
        title: '0',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
      {
        title: '4',
        correct: false,
      },
      {
        title: '5',
        correct: true,
      },
    ],
  },
  {
    id: 72,
    question: 'The unordered collection of properties, each of which has a name and a value is called',
    options: [
      {
        title: 'String',
        correct: false,
      },
      {
        title: 'Object',
        correct: true,
      },
      {
        title: 'Serialized Object',
        correct: false,
      },
      {
        title: 'Array',
        correct: false,
      },
    ],
  },
  {
    id: 73,
    question: 'The object has three object attributes namely',
    options: [
      {
        title: 'Class, parameters, objects extensible flag',
        correct: false,
      },
      {
        title: ' Prototype, class, objects parameters',
        correct: false,
      },
      {
        title: 'Prototype, class, objects extensible flag',
        correct: true,
      },
      {
        title: 'Native object, Classes and Interfaces and Objects extensible flag',
        correct: false,
      },
    ],
  },
  {
    id: 74,
    question: `Native object, Classes and Interfaces and Objects extensible flag
    var book = {
      "main title": "JavaScript", 
      'sub-title': "The Definitive Guide", 
      "for": "all audiences", 
      author: { 
                 firstname: "David", 
                 surname: "Flanagan" 
              }
    };`,
    options: [
      {
        title: 'properties',
        correct: false,
      },
      {
        title: 'property values',
        correct: false,
      },
      {
        title: 'property names',
        correct: true,
      },
      {
        title: 'objects',
        correct: false,
      },
    ],
  },
  {
    id: 75,
    question: 'A linkage of series of prototype objects is called as',
    options: [
      {
        title: 'prototype stack',
        correct: false,
      },
      {
        title: 'prototype chain',
        correct: true,
      },
      {
        title: 'prototype class',
        correct: false,
      },
      {
        title: 'prototypes',
        correct: false,
      },
    ],
  },
  {
    id: 76,
    question: 'To determine whether one object is the prototype of (or is part of the prototype chain of) another object, one should use the',
    options: [
      {
        title: 'isPrototypeOf() method',
        correct: true,
      },
      {
        title: 'equals() method',
        correct: false,
      },
      {
        title: '=== operator',
        correct: false,
      },
      {
        title: '== operator',
        correct: false,
      },
    ],
  },
  {
    id: 77,
    question: `What is the prototype represents in the following JavaScript code snippet?
    function f() {};`,
    options: [
      {
        title: 'The interpreter stops its workThe interpreter stops its work',
        correct: false,
      },
      {
        title: 'The interpreter throws another exception',
        correct: true,
      },
      {
        title: 'The interpreter jumps to the nearest enclosing exception handler',
        correct: false,
      },
      {
        title: 'The interpreter throws an error',
        correct: false,
      },
    ],
  },
  {
    id: 78,
    question: 'The purpose of extensible attribute is to',
    options: [
      {
        title: 'make all of the own properties of that object non configurable',
        correct: false,
      },
      {
        title: 'to configure and bring a writable property',
        correct: false,
      },
      {
        title: 'lock down objects into a known state and prevent outside tampering',
        correct: true,
      },
      {
        title: 'to include new properties into the object',
        correct: false,
      },
    ],
  },
  {
    id: 79,
    question: 'The basic purpose of the toLocaleString() is to',
    options: [
      {
        title: 'return a localised object representation',
        correct: false,
      },
      {
        title: 'return a parsed string',
        correct: false,
      },
      {
        title: 'return a local time in the string format',
        correct: false,
      },
      {
        title: 'return a localized string representation of the object',
        correct: true,
      },
    ],
  },
  {
    id: 80,
    question: `What will be the output of the following JavaScript code?
    const object1 = {  
      property1: 20
    };  
    console.log(Object.is(object1));`,
    options: [
      {
        title: '12',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
      },
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 81,
    question: `What is the observation made in the following JavaScript code?
    var count = [1,,3];`,
    options: [
      {
        title: 'The omitted value takes undefined',
        correct: true,
      },
      {
        title: 'This results in an error',
        correct: false,
      },
      {
        title: 'This results in an exception',
        correct: false,
      },
      {
        title: 'The omitted value takes an integer value',
        correct: false,
      },
    ],
  },
  {
    id: 82,
    question: 'The pop() method of the array does which of the following task?',
    options: [
      {
        title: 'decrements the total length by 1',
        correct: true,
      },
      {
        title: 'increments the total length by 1',
        correct: false,
      },
      {
        title: 'prints the first element but no effect on the length',
        correct: false,
      },
      {
        title: 'updates the element',
        correct: false,
      },
    ],
  },
  {
    id: 83,
    question: `What is the observation made in the following JavaScript code?
    if (!a[i]) continue;`,
    options: [
      {
        title: 'Skips the defined elements',
        correct: false,
      },
      {
        title: 'Skips the existent elements',
        correct: false,
      },
      {
        title: 'Skips the null elements',
        correct: true,
      },
      {
        title: 'Skips the defined & existent elements',
        correct: false,
      },
    ],
  },
  {
    id: 84,
    question: 'What will happen if reverse() and join() methods are used simultaneously?',
    options: [
      {
        title: 'Reverses and stores in the same array',
        correct: true,
      },
      {
        title: 'Reverses and concatenates the elements of the array',
        correct: false,
      },
      {
        title: 'Reverses',
        correct: false,
      },
      {
        title: 'Stores the elements of an array in normal order',
        correct: false,
      },
    ],
  },
  {
    id: 85,
    question: `What will be the possible output of the following JavaScript code?
    var a = [1,2,3,4,5];
    a.slice(0,3);`,
    options: [
      {
        title: 'Returns [1,2,3]',
        correct: true,
      },
      {
        title: 'Returns [4,5]',
        correct: false,
      },
      {
        title: 'Returns [1,2,3,4]',
        correct: false,
      },
      {
        title: 'Returns [1,2,3,4,5]',
        correct: false,
      },
    ],
  },
  {
    id: 86,
    question: 'The primary purpose of the array map() function is that it',
    options: [
      {
        title: 'maps the elements of another array into itself',
        correct: false,
      },
      {
        title: 'passes each element of the array and returns the necessary mapped elements',
        correct: false,
      },
      {
        title: 'passes each element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function',
        correct: true,
      },
      {
        title: 'pass the elements of the array into another array',
        correct: false,
      },
    ],
  },
  {
    id: 87,
    question: 'The reduce and reduceRight methods follow a common operation called',
    options: [
      {
        title: 'filter and fold',
        correct: false,
      },
      {
        title: 'inject and fold',
        correct: true,
      },
      {
        title: 'finger and fold',
        correct: false,
      },
      {
        title: 'fold',
        correct: false,
      },
    ],
  },
  {
    id: 88,
    question: 'The method or operator used to identify the array is',
    options: [
      {
        title: 'isarrayType()',
        correct: false,
      },
      {
        title: '==',
        correct: false,
      },
      {
        title: '===',
        correct: false,
      },
      {
        title: 'typeof',
        correct: true,
      },
    ],
  },
  {
    id: 89,
    question: `What will be the output of the following JavaScript code?
    var values=["one","two","Three"];  
    var ans=values.shift();  
    document.writeln(ans);`,
    options: [
      {
        title: 'one',
        correct: true,
      },
      {
        title: 'two',
        correct: false,
      },
      {
        title: 'three',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 90,
    question: `What will be the output of the following JavaScript code?
    var arr=[1,2,3];  
    var rev=arr.reverse();  
    document.writeln(rev);`,
    options: [
      {
        title: '1, 2, 3',
        correct: false,
      },
      {
        title: '3, 2, 1',
        correct: true,
      },
      {
        title: '3',
        correct: false,
      },
      {
        title: '1',
        correct: false,
      },
    ],
  },
  {
    id: 91,
    question: 'The function definitions in JavaScript begins with',
    options: [
      {
        title: 'Identifier and Parentheses',
        correct: false,
      },
      {
        title: 'Return type and Identifier',
        correct: false,
      },
      {
        title: 'Return type, Function keyword, Identifier and Parentheses',
        correct: true,
      },
      {
        title: 'Identifier and Return type',
        correct: false,
      },
    ],
  },
  {
    id: 92,
    question: `What will be the output of the following JavaScript code?
    function printprops(o) 
    {
        for(var p in o)
          console.log(p + ": " + o[p] + "n");
    }`,
    options: [
      {
        title: 'Prints the contents of each property of o',
        correct: false,
      },
      {
        title: 'Returns undefined',
        correct: true,
      },
      {
        title: 'Prints only one property',
        correct: false,
      },
      {
        title: 'Prints the address of elements',
        correct: false,
      },
    ],
  },
  {
    id: 93,
    question: 'When does the function name become optional in JavaScript?',
    options: [
      {
        title: 'When the function is defined as a looping statement',
        correct: false,
      },
      {
        title: 'When the function is defined as expressions',
        correct: true,
      },
      {
        title: 'When the function is predefined',
        correct: false,
      },
      {
        title: 'When the function is called',
        correct: false,
      },
    ],
  },
  {
    id: 94,
    question: 'What is the purpose of a return statement in a function?',
    options: [
      {
        title: 'Returns the value and continues executing rest of the statements, if any',
        correct: false,
      },
      {
        title: 'Returns the value and stops the program',
        correct: false,
      },
      {
        title: 'Returns the value and stops executing the function',
        correct: false,
      },
      {
        title: 'Stops executing the function and returns the value',
        correct: true,
      },
    ],
  },
  {
    id: 95,
    question: 'What will happen if a return statement does not have an associated expression?',
    options: [
      {
        title: 'It returns the value 0',
        correct: false,
      },
      {
        title: 'It will throw an exception',
        correct: false,
      },
      {
        title: 'It returns the undefined value',
        correct: true,
      },
      {
        title: 'It will throw an error',
        correct: false,
      },
    ],
  },
  {
    id: 96,
    question: 'A function with no return value is called',
    options: [
      {
        title: 'Procedures',
        correct: true,
      },
      {
        title: 'Method',
        correct: false,
      },
      {
        title: 'Static function',
        correct: false,
      },
      {
        title: 'Dynamic function',
        correct: false,
      },
    ],
  },
  {
    id: 97,
    question: 'The function stops its execution when it encounters?',
    options: [
      {
        title: 'continue statement',
        correct: false,
      },
      {
        title: 'break statement',
        correct: false,
      },
      {
        title: 'goto statement',
        correct: false,
      },
      {
        title: 'return statement',
        correct: true,
      },
    ],
  },
  {
    id: 98,
    question: 'Which is an equivalent code to invoke a function m of class o that expects two arguments x and y?',
    options: [
      {
        title: 'o(x,y);',
        correct: false,
      },
      {
        title: 'o.m(x) && o.m(y);',
        correct: false,
      },
      {
        title: 'm(x,y);',
        correct: false,
      },
      {
        title: 'o.m(x,y);',
        correct: true,
      },
    ],
  },
  {
    id: 99,
    question: `What will be the equivalent code of the following JavaScript code?
    o.m(x,y);`,
    options: [
      {
        title: 'o.m(x) && o.m(y);',
        correct: false,
      },
      {
        title: 'o[“m”](x,y);',
        correct: true,
      },
      {
        title: 'o(m)[“x”,”y”];',
        correct: false,
      },
      {
        title: 'o.m(x && y);',
        correct: false,
      },
    ],
  },
  {
    id: 100,
    question: `What will be the output of the following JavaScript code?
    function info()
    {  
        int a=1;
        int b=2;
        return a*b;  
    }  
    document.write(info());`,
    options: [
      {
        title: '1',
        correct: false,
      },
      {
        title: '2',
        correct: true,
      },
      {
        title: '3',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 101,
    question: `What kind of scoping does JavaScript use?`,
    options: [
      {
        title: 'Literal',
        correct: false,
      },
      {
        title: 'Lexical',
        correct: true,
      },
      {
        title: 'Segmental',
        correct: false,
      },
      {
        title: 'Sequential',
        correct: false,
      },
    ],
  },
  {
    id: 102,
    question: `What must be done in order to implement Lexical Scoping?`,
    options: [
      {
        title: 'Get the object',
        correct: false,
      },
      {
        title: 'Dereference the current scope chain',
        correct: false,
      },
      {
        title: 'Reference the current scope chain',
        correct: true,
      },
      {
        title: 'Return the value',
        correct: false,
      },
    ],
  },
  {
    id: 103,
    question: `What will be the output of the following JavaScript code?
    function info()
    {  
        int a=1;
        int b=2;
        return a*b;  
    }  
    document.write(info());`,
    options: [
      {
        title: 'Function objects',
        correct: false,
      },
      {
        title: 'Scope where functions variables are resolved',
        correct: false,
      },
      {
        title: 'Both Function objects and Scope where functions variables are resolved',
        correct: true,
      },
      {
        title: 'Function return value',
        correct: false,
      },
    ],
  },
  {
    id: 104,
    question: `Which of the following is not an example of closures?`,
    options: [
      {
        title: 'Objects',
        correct: false,
      },
      {
        title: 'Variables',
        correct: false,
      },
      {
        title: 'Functions',
        correct: false,
      },
      {
        title: 'Graphics',
        correct: true,
      },
    ],
  },
  {
    id: 105,
    question: `Which of the following uses a lot of CPU cycles?`,
    options: [
      {
        title: 'GUI',
        correct: false,
      },
      {
        title: 'Statically generated graphics',
        correct: false,
      },
      {
        title: 'Dynamically generated graphics',
        correct: true,
      },
      {
        title: 'Generic scoping',
        correct: false,
      },
    ],
  },
  {
    id: 106,
    question: ` What will be the function of the following JavaScript code?

    var scope = "global scope";
    function checkscope() 
    {
        var scope = "local scope"; 
        function f() 
        { 
             return scope; 
        }
        return f;
    }`,
    options: [
      {
        title: 'Returns value null',
        correct: false,
      },
      {
        title: 'Returns exception',
        correct: true,
      },
      {
        title: 'Returns the value in scope',
        correct: false,
      },
      {
        title: 'Shows an error message',
        correct: false,
      },
    ],
  },
  {
    id: 101,
    question: `What is the fundamental rule of lexical scoping?`,
    options: [
      {
        title: 'Functions are declared in the scope',
        correct: false,
      },
      {
        title: 'Functions are executed using scope chain',
        correct: true,
      },
      {
        title: 'Functions are declared outside the scope',
        correct: false,
      },
      {
        title: 'Variables are declared within the function',
        correct: false,
      },
    ],
  },
  {
    id: 108,
    question: `What is the opposite approach to the lexical scoping?`,
    options: [
      {
        title: 'Literal scoping',
        correct: false,
      },
      {
        title: 'Static scoping',
        correct: false,
      },
      {
        title: 'Dynamic scoping',
        correct: true,
      },
      {
        title: 'Generic scoping',
        correct: false,
      },
    ],
  },
  {
    id: 109,
    question: `What is the purpose of the dynamic scoping?`,
    options: [
      {
        title: 'Variables can be declared outside the scope',
        correct: true,
      },
      {
        title: 'Variables must be declared outside the scope',
        correct: false,
      },
      {
        title: 'Variables cannot be declared outside the scope',
        correct: false,
      },
      {
        title: 'Variable cannot be declared within the function',
        correct: false,
      },
    ],
  },
  {
    id: 110,
    question: `Which of the algorithmic languages is not lexical scoping standardized in?`,
    options: [
      {
        title: '1',
        correct: false,
      },
      {
        title: '2',
        correct: false,
      },
      {
        title: '3',
        correct: false,
      },
      {
        title: 'error',
        correct: true,
      },
    ],
  },
  {
    id: 111,
    question: `The behaviour of the instances present of a class inside a method is defined by`,
    options: [
      {
        title: 'Method',
        correct: false,
      },
      {
        title: 'Classes',
        correct: true,
      },
      {
        title: 'Interfaces',
        correct: false,
      },
      {
        title: 'Classes and Interfaces',
        correct: false,
      },
    ],
  },
  {
    id: 112,
    question: `The keyword or the property that you use to refer to an object through which they were invoked is`,
    options: [
      {
        title: 'from',
        correct: false,
      },
      {
        title: 'to',
        correct: true,
      },
      {
        title: 'this',
        correct: false,
      },
      {
        title: 'object',
        correct: false,
      },
    ],
  },
  {
    id: 113,
    question: `What will be the output of the following JavaScript code?
    var o = new F();
    o.constructor === F`,
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
        title: '0',
        correct: false,
      },
      {
        title: '1',
        correct: false,
      },
    ],
  },
  {
    id: 114,
    question: `The basic difference between JavaScript and Java is`,
    options: [
      {
        title: 'There is no difference',
        correct: false,
      },
      {
        title: 'Functions are considered as fields',
        correct: false,
      },
      {
        title: 'Variables are specific',
        correct: false,
      },
      {
        title: 'Functions are values, and there is no hard distinction between methods and fields',
        correct: true,
      },
    ],
  },
  {
    id: 115,
    question: `The meaning for Augmenting classes is that`,
    options: [
      {
        title: 'objects inherit prototype properties even in a dynamic state',
        correct: true,
      },
      {
        title: 'objects inherit prototype properties only in a dynamic state',
        correct: false,
      },
      {
        title: 'objects inherit prototype properties in the static state',
        correct: false,
      },
      {
        title: 'object doesnt inherit prototype properties in the static state',
        correct: false,
      },
    ],
  },
  {
    id: 116,
    question: `The property of JSON() method is `,
    options: [
      {
        title: 'it can be invoked manually as object.JSON()',
        correct: false,
      },
      {
        title: 'it will be automatically invoked by the compiler',
        correct: false,
      },
      {
        title: 'it is invoked automatically by the JSON.stringify() method',
        correct: true,
      },
      {
        title: 'it cannot be invoked in any form',
        correct: false,
      },
    ],
  },
  {
    id: 117,
    question: `When a class B can extend another class A, we say that?`,
    options: [
      {
        title: 'A is the superclass and B is the subclass',
        correct: true,
      },
      {
        title: 'B is the superclass and A is the subclass',
        correct: false,
      },
      {
        title: 'Both A and B are the superclass',
        correct: false,
      },
      {
        title: 'Both A and B are the subclass',
        correct: false,
      },
    ],
  },
  {
    id: 118,
    question: `If A is the superclass and B is the subclass, then subclass inheriting the superclass can be represented as`,
    options: [
      {
        title: 'B=inherit(A);',
        correct: false,
      },
      {
        title: 'B=A.inherit();',
        correct: false,
      },
      {
        title: 'B.prototype=inherit(A);',
        correct: true,
      },
      {
        title: 'B.prototype=inherit(A.prototype);',
        correct: false,
      },
    ],
  },
  {
    id: 119,
    question: `The snippet that filters the filtered set is`,
    options: [
      {
        title: 'var t=new FilteredSet(s, {function(s) {return !(x instanceof Set);});',
        correct: true,
      },
      {
        title: 'var t=new FilteredSet{function(s) {return !(x instanceof Set);});',
        correct: false,
      },
      {
        title: 'var t=new FilteredSet(s, {function(s) {return (x instanceof Set);});',
        correct: false,
      },
      {
        title: 'var t=new FilteredSet(s, {function(s) {return x;});',
        correct: false,
      },
    ],
  },
  {
    id: 120,
    question: `The method that can be used to create new properties and also to modify the attributes of existing properties is`,
    options: [
      {
        title: 'Object.defineProperty()',
        correct: false,
      },
      {
        title: 'Object.defineProperties()',
        correct: false,
      },
      {
        title: 'Both Object.defineProperty() and Object.defineProperties()',
        correct: true,
      },
      {
        title: 'Object.inherit()',
        correct: false,
      },
    ],
  },
  {
    id: 121,
    question: `What will be the output of the following JavaScript code?
    const obj1 = 
    {  
        a: 10,  
        b: 15,  
        c: 18  
    };  
    const obj2 = Object.assign({c: 7, d: 1}, obj1);  
    console.log(obj2.c, obj2.d);`,
    options: [
      {
        title: '7,1',
        correct: false,
      },
      {
        title: '18,1',
        correct: true,
      },
      {
        title: 'Undefined',
        correct: false,
      },
      {
        title: 'Error',
        correct: false,
      },
    ],
  },
  {
    id: 122,
    question: `What will be the output of the following JavaScript code?
    function person()
    {  
            this.name = 'rahul';  
    }  
    function obj() 
    {  
           obj.call(this)  
    }  
    obj.prototype = Object.create(person.prototype);  
    const app = new obj();  
    console.log(app.name);`,
    options: [
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: 'runtime error',
        correct: false,
      },
      {
        title: 'compilation error',
        correct: false,
      },
      {
        title: 'rahul',
        correct: true,
      },
    ],
  },
  {
    id: 123,
    question: `What will be the output of the following JavaScript code?
    const object1 = {};  
    Object.defineProperties(object1,
    {  
        property1: 
            {  
                 value: 10 
            }  
     });  
    console.log(object1.property1);`,
    options: [
      {
        title: '0',
        correct: false,
      },
      {
        title: '10',
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
    id: 124,
    question: `What will be the output of the following JavaScript code?
    const prototype1 = {};  
    const object1 = Object.create(prototype1);  
    console.log(Object.getPrototypeOf(object1) === prototype1);`,
    options: [
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
      {
        title: '0',
        correct: false,
      },
    ],
  },
  {
    id: 125,
    question: `What will be the output of the following JavaScript code?
    const obj1 = {  
      property1: 2  
    };  
    Object.seal(object1);    
    obj1.property1 =4;  
    console.log(obj1.property1);  
    delete obj1.property1;`,
    options: [
      {
        title: '2',
        correct: false,
      },
      {
        title: '4',
        correct: false,
      },
      {
        title: 'Error',
        correct: true,
      },
      {
        title: 'Undefined',
        correct: false,
      },
    ],
  },
  {
    id: 126,
    question: `The four kinds of class members are`,
    options: [
      {
        title: 'Instance methods, Instance fields, Static method, Dynamic method',
        correct: false,
      },
      {
        title: 'Instance fields, Instance methods, Class fields, Class methods',
        correct: true,
      },
      {
        title: 'Instance fields, Non-instance fields, Dynamic methods, Global methods',
        correct: false,
      },
      {
        title: 'Global methods, Local methods, Dynamic methods, Static methods',
        correct: false,
      },
    ],
  },
  {
    id: 127,
    question: `Different kinds of the object involved in a class definition are`,
    options: [
      {
        title: 'Public object, Private object, Protected object',
        correct: false,
      },
      {
        title: 'B is the superclass and A is the subclass',
        correct: false,
      },
      {
        title: 'Both A and B are the superclass',
        correct: true,
      },
      {
        title: 'Both A and B are the subclass',
        correct: false,
      },
    ],
  },
  {
    id: 128,
    question: `The object whose properties are inherited by all instances of the class, and properties whose values are functions behaving like instance methods of the class, is`,
    options: [
      {
        title: 'Instance object',
        correct: false,
      },
      {
        title: 'Constructor object',
        correct: false,
      },
      {
        title: 'Destructor object',
        correct: false,
      },
      {
        title: 'Prototype object',
        correct: true,
      },
    ],
  },
  {
    id: 129,
    question: `Which variables are used internally in object methods and are also globally visible?`,
    options: [
      {
        title: 'Object properties',
        correct: false,
      },
      {
        title: 'Variable properties',
        correct: true,
      },
      {
        title: 'Method properties',
        correct: false,
      },
      {
        title: 'Internal properties',
        correct: false,
      },
    ],
  },
  {
    id: 130,
    question: `The class that represents the regular expressions is`,
    options: [
      {
        title: 'RegExpObj',
        correct: false,
      },
      {
        title: 'RegExpClass',
        correct: false,
      },
      {
        title: 'RegExp',
        correct: true,
      },
      {
        title: 'StringExp',
        correct: false,
      },
    ],
  },
  {
    id: 131,
    question: `The different variant of Date() constructor to create date object is/are
    i. new Date(date)
    ii. new Date(milliseconds)
    iii. new Date(date string)
    iv. new Date(year, month, date[hour, minute, second, millisecond])`,
    options: [
      {
        title: 'i, ii and iii only',
        correct: false,
      },
      {
        title: 'ii, iii and iv only',
        correct: true,
      },
      {
        title: 'i, ii and iv only',
        correct: false,
      },
      {
        title: 'i, ii, iii and iv',
        correct: false,
      },
    ],
  },
  {
    id: 132,
    question: `Which is the correct code that returns a complex number that is the complex conjugate of this one?`,
    options: [
      {
        title: 'Complex.prototype.conj = function() { return new Complex(this.r, -this.i); };',
        correct: true,
      },
      {
        title: 'Complex.prototype.conj = function() { return Complex(this.r, -this.i); };',
        correct: false,
      },
      {
        title: 'Complex.prototype.conj = function() { return (this.r, -this.i); };',
        correct: false,
      },
      {
        title: 'Complex.prototype.conj = function() { new Complex(this.r, -this.i); };',
        correct: false,
      },
    ],
  },
  {
    id: 133,
    question: `How can we make methods available on all objects?`,
    options: [
      {
        title: 'Object.add(methods)',
        correct: false,
      },
      {
        title: 'Object.methods(add)',
        correct: false,
      },
      {
        title: 'Object.add.methods(…)',
        correct: false,
      },
      {
        title: 'Object.prototype',
        correct: true,
      },
    ],
  },
  {
    id: 134,
    question: `What is the procedure to add methods to HTMLElement so that they will be inherited by the objects that represent the HTML tags in the current document?`,
    options: [
      {
        title: 'HTMLElement.prototype(…)',
        correct: false,
      },
      {
        title: 'HTMLElement.prototype',
        correct: true,
      },
      {
        title: 'HTML.addmethods()',
        correct: false,
      },
      {
        title: 'HTML.elements(add)',
        correct: false,
      },
    ],
  },
  {
    id: 135,
    question: `You can refresh the webpage in JavaScript by using`,
    options: [
      {
        title: 'window.reload',
        correct: false,
      },
      {
        title: 'location.reload',
        correct: true,
      },
      {
        title: 'window.refresh',
        correct: false,
      },
      {
        title: 'page.refresh',
        correct: false,
      },
    ],
  },
  {
    id: 136,
    question: `What will be the output of the following JavaScript code?

    emp={id:102,name:"Shyam Kumar",salary:40000}  
    document.write(emp.id+" "+emp.name+" "+emp.salary);`,
    options: [
      {
        title: '102 4000 Shyam Kumar',
        correct: false,
      },
      {
        title: '102 4000',
        correct: true,
      },
      {
        title: '102 Shyam Kumar 40000',
        correct: false,
      },
      {
        title: '102 shyam kumar 40000',
        correct: false,
      },
    ],
  },
  {
    id: 137,
    question: ` What will be the output of the following JavaScript code?
    function emp(id,name)
{  
    this.id=id;  
    this.name=name;    
}  
e=new emp(103,"Vimal Jaiswal");  
 
document.write(e.id+" "+e.name");`,
    options: [
      {
        title: '103 vimal jaiswal',
        correct: false,
      },
      {
        title: '103',
        correct: false,
      },
      {
        title: '103 Vimal Jaiswal',
        correct: true,
      },
      {
        title: 'Vimal jaiswal',
        correct: false,
      },
    ],
  },
  {
    id: 138,
    question: `What will be the output of the following JavaScript code?

    var emp=new Object();  
    emp.name="Ravi Malik";  
    emp.salary=50000;  
    document.write("emp.name+" "+emp.salary);`,
    options: [
      {
        title: 'Ravi malik 5000',
        correct: false,
      },
      {
        title: 'Ravi Malik 50000',
        correct: true,
      },
      {
        title: 'Ravi malik',
        correct: false,
      },
      {
        title: '50000',
        correct: false,
      },
    ],
  },
  {
    id: 139,
    question: `What will be the output of the following JavaScript code?

    function emp(name,salary)
    {  
         this.name=name;  
         this.salary=salary;  
     
         this.changeSalary=changeSalary;  
         function changeSalary(otherSalary)
         {  
             this.salary=otherSalary;  
         }  
    }  
    e=new emp("Rahul",30000);  
    e.changeSalary(45000);  
    document.write("e.name+" "+e.salary);`,
    options: [
      {
        title: 'Rahul 30000',
        correct: false,
      },
      {
        title: 'Rahul',
        correct: true,
      },
      {
        title: 'Rahul 45000',
        correct: false,
      },
      {
        title: '45000',
        correct: false,
      },
    ],
  },
  {
    id: 140,
    question: `What will be the output of the following JavaScript code?

    const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
    console.log(Object.entries(obj)[2]);`,
    options: [
      {
        title: '[“arry”, “10”]',
        correct: true,
      },
      {
        title: '[“10”,”arry”]',
        correct: false,
      },
      {
        title: '[“21”,barry”]',
        correct: false,
      },
      {
        title: '[“23”,”carry”]',
        correct: false,
      },
    ],
  },
  {
    id: 141,
    question: `The functions provide() and require() of Dojo toolkit and Googles Closure library are used for`,
    options: [
      {
        title: 'declaring and loading modules',
        correct: true,
      },
      {
        title: 'declaring functions',
        correct: false,
      },
      {
        title: 'declaring modules',
        correct: false,
      },
      {
        title: 'loading modules',
        correct: false,
      },
    ],
  },
  {
    id: 142,
    question: `The maximum number of global symbols a module can define is `,
    options: [
      {
        title: '2',
        correct: false,
      },
      {
        title: '3',
        correct: false,
      },
      {
        title: '1',
        correct: true,
      },
      {
        title: '4',
        correct: false,
      },
    ],
  },
  {
    id: 143,
    question: `To define each of the set classes as a property of the sets object (namespace) for the module, the statement is`,
    options: [
      {
        title: 'sets = sets.AbstractEnumerableSet.extend();',
        correct: false,
      },
      {
        title: 'sets.SingletonSet = sets.AbstractEnumerableSet.extend(…);',
        correct: true,
      },
      {
        title: 'sets.SingletonSet = sets.extend(…);',
        correct: false,
      },
      {
        title: 'sets = sets.extend(…);',
        correct: false,
      },
    ],
  },
  {
    id: 144,
    question: `What will be the efficiency quotient of the following JavaScript statements?

    var Set = sets.Set;
    var s = new Set(1,2,3);`,
    options: [
      {
        title: 'The programmer imports at once the frequently used values into the global namespace',
        correct: true,
      },
      {
        title: 'There is no efficiency quotient, the programmer tries to make it inefficient',
        correct: false,
      },
      {
        title: 'The programmer needs to import the Sets everytime he wants to use it',
        correct: false,
      },
      {
        title: 'the programmer imports the set everytime the statement is encountered',
        correct: false,
      },
    ],
  },
  {
    id: 145,
    question: `The scope of a function is also called as`,
    options: [
      {
        title: 'Predefined function',
        correct: false,
      },
      {
        title: 'Module function',
        correct: true,
      },
      {
        title: 'Public function',
        correct: false,
      },
      {
        title: 'Private function',
        correct: false,
      },
    ],
  },
  {
    id: 146,
    question: `Modules that have more than one item in their API can`,
    options: [
      {
        title: 'Assign itself to a global variable',
        correct: false,
      },
      {
        title: 'Invoke another module of the same kind',
        correct: false,
      },
      {
        title: 'Return a namespace object',
        correct: true,
      },
      {
        title: 'Invoke another module of the same kind',
        correct: false,
      },
    ],
  },
  {
    id: 147,
    question: `The provides() function and the exportsobject are used to `,
    options: [
      {
        title: 'Register the modules API and Store their API',
        correct: true,
      },
      {
        title: 'Call the modules api',
        correct: false,
      },
      {
        title: 'Store the modules API',
        correct: false,
      },
      {
        title: 'Register the modules api',
        correct: false,
      },
    ],
  },
  {
    id: 148,
    question: ` What could be achieved by running the JavaScript code snippet below?

    var sets = com.davidflanagan.collections.sets;`,
    options: [
      {
        title: 'Importing a single module',
        correct: false,
      },
      {
        title: 'Importing a module partially',
        correct: false,
      },
      {
        title: 'Importing a namespace',
        correct: false,
      },
      {
        title: 'Importing the entire module',
        correct: true,
      },
    ],
  },
  {
    id: 149,
    question: `The properties() method is a`,
    options: [
      {
        title: 'Enumerable method',
        correct: false,
      },
      {
        title: 'Non-enumerable method',
        correct: true,
      },
      {
        title: 'Operational method',
        correct: false,
      },
      {
        title: 'calling method',
        correct: false,
      },
    ],
  },
  {
    id: 150,
    question: `What can be done in order to avoid the creation of global variables in JavaScript?`,
    options: [
      {
        title: 'To use a method that defines all the variables',
        correct: false,
      },
      {
        title: 'To use an object that has the reference to all the variables',
        correct: false,
      },
      {
        title: 'To use an object as its namespace',
        correct: true,
      },
      {
        title: 'To use global functions',
        correct: false,
      },
    ],
  },
  {
    id: 151,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
    <script>
    var x = 123e5;
    document.getElementById("demo").innerHTML = x ;
    </script>`,
    options: [
      {
        title: '0.0123',
        correct: false,
      },
      {
        title: '12300',
        correct: true,
      },
      {
        title: 'Error',
        correct: false,
      },
      {
        title: 'Undefined',
        correct: false,
      },
    ],
  },
  {
    id: 152,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
     <script>
    function myFunction() 
    {
       var res = "";
       res = res + Number.isFinite(5-2) ;
       document.getElementById("demo").innerHTML = res;
    }
    </script>`,
    options: [
      {
        title: '3',
        correct: false,
      },
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 153,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
     <script>
    function myFunction() 
    {
       var res = "";
       res = res + Number.isFinite(0 / 0);
       document.getElementById("demo").innerHTML = res;
    }
    </script>`,
    options: [
      {
        title: '3',
        correct: false,
      },
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
      },
      {
        title: 'error',
        correct: false,
      },
    ],
  },
  {
    id: 154,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
    <script>
    function myFunction() 
    {
       var res = "";
       res = res + Number.isInteger('123');
       document.getElementById("demo").innerHTML = res;
    }
    </script>`,
    options: [
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
      },
      {
        title: 'Error',
        correct: false,
      },
      {
        title: 'Undefined',
        correct: false,
      },
    ],
  },
  {
    id: 155,
    question: `What will be the output of the following JavaScript code?
    <p id="demo"></p>
    <script>
    function myFunction() 
    {
       var res = "";
       res = res + Number.isInteger(0.5) + ": 0.5<br>";
       document.getElementById("demo").innerHTML = res;
    }
    </script>`,
    options: [
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
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
    id: 156,
    question: `The $ present in the RegExp object is called a`,
    options: [
      {
        title: 'character',
        correct: false,
      },
      {
        title: 'matcher',
        correct: false,
      },
      {
        title: 'metacharacter',
        correct: true,
      },
      {
        title: 'metadata',
        correct: false,
      },
    ],
  },
  {
    id: 157,
    question: `Consider the following JavaScript statement containing regular expressions and check if the pattern matches?
    var text = "testing: 1, 2, 3"; 
    var pattern = /d+/g;`,
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
    id: 158,
    question: `The regular expression to match any one character not between the brackets is`,
    options: [
      {
        title: '[…]',
        correct: false,
      },
      {
        title: '[^]',
        correct: false,
      },
      {
        title: '[^…]',
        correct: true,
      },
      {
        title: '[\D]',
        correct: false,
      },
    ],
  },
  {
    id: 159,
    question: `What does /[^(]* regular expression indicate?`,
    options: [
      {
        title: 'Match one or more characters that are not open parenthesis',
        correct: false,
      },
      {
        title: 'Match zero or more characters that are open parenthesis',
        correct: false,
      },
      {
        title: 'Match zero or more characters that are not open parenthesis',
        correct: true,
      },
      {
        title: 'Match one or more characters that are open parenthesis',
        correct: false,
      },
    ],
  },
  {
    id: 160,
    question: `Match one or more characters that are open parenthesis`,
    options: [
      {
        title: 'Matches the letter b preceded by the fewest number of as possible',
        correct: true,
      },
      {
        title: 'Matches the letter b preceded by any number of a',
        correct: false,
      },
      {
        title: 'Matches letter a preceded by letter b, in the stack order',
        correct: false,
      },
      {
        title: 'Matches letter a present in the string',
        correct: false,
      },
    ],
  },
  {
    id: 161,
    question: `What does the subexpression /java(script)?/ result in?`,
    options: [
      {
        title: 'It matches “java” followed by the optional “script”',
        correct: true,
      },
      {
        title: ' It matches “java” followed by any number of “script”',
        correct: false,
      },
      {
        title: ' It matches “java” followed by a minimum of one “script',
        correct: false,
      },
      {
        title: 'It matches “java” followed by a single “script”',
        correct: false,
      },
    ],
  },
  {
    id: 162,
    question: `What is the most essential purpose of parentheses in regular expressions?`,
    options: [
      {
        title: 'Define pattern matching techniques',
        correct: false,
      },
      {
        title: 'Define subpatterns within the complete pattern',
        correct: true,
      },
      {
        title: 'Define portion of strings in the regular expression',
        correct: false,
      },
      {
        title: 'Define portion of strings in the regular expression',
        correct: false,
      },
    ],
  },
  {
    id: 163,
    question: `The method that performs the search-and-replace operation to strings for pattern matching is`,
    options: [
      {
        title: 'searchandreplace()',
        correct: false,
      },
      {
        title: 'add()',
        correct: false,
      },
      {
        title: 'edit()',
        correct: false,
      },
      {
        title: 'replace()',
        correct: true,
      },
    ],
  },
  {
    id: 164,
    question: `What would be the result of the following statement in JavaScript using regular expression methods?`,
    options: [
      {
        title: 'Returns [“123″”456″”789”]',
        correct: false,
      },
      {
        title: 'Returns [“123″,”456″,”789”]',
        correct: true,
      },
      {
        title: 'Returns [1,2,3,4,5,6,7,8,9]',
        correct: false,
      },
      {
        title: 'Throws an exception',
        correct: false,
      },
    ],
  },
  {
    id: 165,
    question: `What will be the purpose of exec() in the following JavaScript code?
    var pattern = /Java/g;
    var text = "JavaScript is more fun than Java!";
    var result;
    while ((result = pattern.exec(text)) != null) 
    {
        alert("Matched '" + result[0] + "'" +" at position " + result.index +"; 
              next search begins at " + pattern.lastIndex);
    }
`,
    options: [
      {
        title: 'Returns the same kind of array whether or not the regular expression has the global g flag',
        correct: true,
      },
      {
        title: 'Returns different arrays in the different turns of iterations',
        correct: false,
      },
      {
        title: ' Return a sub part of the array',
        correct: false,
      },
      {
        title: 'Returns a null value',
        correct: false,
      },
    ],
  },
  {
    id: 166,
    question: `What will be the output of the following JavaScript code?
    console.log(Pattern.matches("[amn]", "abcd"));`,
    options: [
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: 'a',
        correct: false,
      },
    ],
  },
  {
    id: 167,
    question: `What will be the output of the following JavaScript code?

    console.log(Pattern.matches("[amn]?", "a"));`,
    options: [
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: 'bcd',
        correct: false,
      },
    ],
  },
  {
    id: 168,
    question: `What will be the output of the following JavaScript code?

    console.log(Pattern.matches("\\d", "1"));`,
    options: [
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: '1',
        correct: false,
      },
    ],
  },
  {
    id: 169,
    question: `What will be the output of the following JavaScript code?

    Console.log(Pattern.matches("[adf]+", "a"));`,
    options: [
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: '0',
        correct: false,
      },
    ],
  },
  {
    id: 170,
    question: `What will be the output of the following JavaScript code?

    console.log(Pattern.matches("[^abc]", "aemngq"));`,
    options: [
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
      },
      {
        title: 'undefined',
        correct: false,
      },
      {
        title: '1',
        correct: false,
      },
    ],
  },
  {
    id: 171,
    question: `The Crockfords subset does not include which function in JavaScript?`,
    options: [
      {
        title: 'eval()',
        correct: true,
      },
      {
        title: 'coeval()',
        correct: false,
      },
      {
        title: 'equal()',
        correct: false,
      },
      {
        title: 'equivalent()',
        correct: false,
      },
    ],
  },
  {
    id: 172,
    question: `What does javascript use instead of == and !=?`,
    options: [
      {
        title: 'It uses bitwise checking',
        correct: false,
      },
      {
        title: 'It uses === and !== instead',
        correct: true,
      },
      {
        title: 'It uses equals() and notequals() instead',
        correct: false,
      },
      {
        title: 'It uses equalto()',
        correct: false,
      },
    ],
  },
  {
    id: 173,
    question: `What is being imposed on each subset to ensure that it conforms to the subset?`,
    options: [
      {
        title: 'A parser to parse the code',
        correct: false,
      },
      {
        title: 'A parser that parses and adds to the subset',
        correct: false,
      },
      {
        title: 'A static verifier that parses code',
        correct: true,
      },
      {
        title: 'A predefined function to parse the code',
        correct: false,
      },
    ],
  },
  {
    id: 174,
    question: `Why was “The Good Parts” designed as a language subset in JavaScript?`,
    options: [
      {
        title: 'To improve programmer flexibility',
        correct: false,
      },
      {
        title: 'To balance the workload of the programmer',
        correct: false,
      },
      {
        title: 'To create an in-built compiler and interpreter',
        correct: false,
      },
      {
        title: 'To improve programmer productivity',
        correct: true,
      },
    ],
  },
  {
    id: 175,
    question: ` Which is the subset that is a secure container designed for the purpose of safely running untrusted JavaScript?`,
    options: [
      {
        title: 'Sandbox',
        correct: true,
      },
      {
        title: 'The Good Parts',
        correct: false,
      },
      {
        title: 'Both Sandbox and Good Parts',
        correct: false,
      },
      {
        title: 'Web browser',
        correct: false,
      },
    ],
  },
  {
    id: 176,
    question: `Why is this keyword not preferred in JavaScript?`,
    options: [
      {
        title: 'Highly memory consuming',
        correct: false,
      },
      {
        title: 'Functions should access the global objects',
        correct: false,
      },
      {
        title: 'Functions should not access the global objects',
        correct: true,
      },
      {
        title: 'Very inefficient to use',
        correct: false,
      },
    ],
  },
  {
    id: 177,
    question: `Which are the two functions that are not allowed in any secure subset?`,
    options: [
      {
        title: 'evaluate() and restrict()',
        correct: false,
      },
      {
        title: 'eval() and the Function() constructor',
        correct: true,
      },
      {
        title: 'debugger() and test()',
        correct: false,
      },
      {
        title: 'eval() and debugger()',
        correct: false,
      },
    ],
  },
  {
    id: 178,
    question: `Which is the object that defines methods that allow complete control over page content?`,
    options: [
      {
        title: 'The client-side document object',
        correct: true,
      },
      {
        title: 'The server-side document object',
        correct: false,
      },
      {
        title: 'Both client-side and server-side document object',
        correct: false,
      },
      {
        title: 'Web document object',
        correct: false,
      },
    ],
  },
  {
    id: 179,
    question: `Which was one of the first security subsets proposed?`,
    options: [
      {
        title: 'FBJS',
        correct: false,
      },
      {
        title: 'Caja',
        correct: false,
      },
      {
        title: 'dojox.secure',
        correct: false,
      },
      {
        title: 'ADSafe',
        correct: true,
      },
    ],
  },
  {
    id: 180,
    question: `Which is the subset that transforms web content into secure modules that can be safely hosted on a web page?`,
    options: [
      {
        title: 'Microsoft Web Sandbox',
        correct: false,
      },
      {
        title: 'ADsafe',
        correct: false,
      },
      {
        title: 'Caja',
        correct: false,
      },
      {
        title: 'dojox.secure',
        correct: true,
      },
    ],
  },
  {
    id: 181,
    question: `What will be the output of the following JavaScript code?
    var set = new Set();  
    set.add("one");  
    set.add("two");    
    for (let elements of set) 
    {  
        document.writeln(elements+" ");  
    }`,
    options: [
      {
        title: 'one',
        correct: false,
      },
      {
        title: 'two',
        correct: false,
      },
      {
        title: 'one two',
        correct: true,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 182,
    question: `What will be the output of the following JavaScript code?

    set.add("AngularJS");  
    set.add("Bootstrap");    
    set.delete("Bootstrap");  
    document.writeln(set.size);`,
    options: [
      {
        title: '2',
        correct: false,
      },
      {
        title: '1',
        correct: true,
      },
      {
        title: '0',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 183,
    question: `What will be the output of the following JavaScript code?

    set.add("one");  
    set.add("two");  
    set.add("three");    
    set.clear();  
    document.writeln(set.size);`,
    options: [
      {
        title: 'one',
        correct: false,
      },
      {
        title: '1',
        correct: false,
      },
      {
        title: '2',
        correct: false,
      },
      {
        title: '0',
        correct: true,
      },
    ],
  },
  {
    id: 184,
    question: `What will be the output of the following JavaScript code?

    set.add("one");  
    set.add("two”);
    var itr=set.values();  
    document.writeln(itr.next().value);`,
    options: [
      {
        title: 'one',
        correct: true,
      },
      {
        title: 'two',
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
    id: 185,
    question: `What will be the output of the following JavaScript code?

    set.add("1");  
    set.add("2");    
    document.writeln(set.has("3"));`,
    options: [
      {
        title: '3',
        correct: false,
      },
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: true,
      },
      {
        title: '2',
        correct: false,
      },
    ],
  },
  {
    id: 186,
    question: ` What will be the output of the following JavaScript code?
    const pi=3.14;
    var pi=4;
    console.log(pi);`,
    options: [
      {
        title: 'This will flash an error',
        correct: true,
      },
      {
        title: 'Prints 4',
        correct: false,
      },
      {
        title: 'Prints 3.14',
        correct: false,
      },
      {
        title: 'Ambiguity',
        correct: false,
      },
    ],
  },
  {
    id: 187,
    question: `The let keyword cannot be used`,
    options: [
      {
        title: 'as a substitute of var',
        correct: false,
      },
      {
        title: 'as a block statement to define new variables',
        correct: false,
      },
      {
        title: 'to define variables that are scoped to a single expression',
        correct: false,
      },
      {
        title: 'in a else if loop, as a substitute for var',
        correct: true,
      },
    ],
  },
  {
    id: 188,
    question: `The main difference between the variables declared with var and with let is`,
    options: [
      {
        title: 'var is confined to a particular function but let is not',
        correct: false,
      },
      {
        title: 'let is confined to a particular function but var is not',
        correct: true,
      },
      {
        title: 'var defines values based on conditions but let does not',
        correct: false,
      },
      {
        title: 'let doesnt let you change the value of the variable',
        correct: false,
      },
    ],
  },
  {
    id: 189,
    question: `What will be the output of the following JavaScript code if oddsums(5); is executed after the following code snippet?

    function oddsums(n) 
    {
         let total = 0, result=[]; 
         for(let x = 1; x <= n; x++) 
         { 
            let odd = 2*x-1; 
            total += odd;
            result.push(total);
         }
         return result;
    }`,
    options: [
      {
        title: 'Returns [1,4,9,16,25]',
        correct: true,
      },
      {
        title: 'Returns [1,2,3,4,5]',
        correct: false,
      },
      {
        title: 'Returns [3,6,9,12,15]',
        correct: false,
      },
      {
        title: 'Returns [1,3,5,7,9]',
        correct: false,
      },
    ],
  },
  {
    id: 190,
    question: `What would be the result or type of error if p is not defined in the following JavaScript code snippet?
    console.log(p)
    `,
    options: [
      {
        title: 'Zero',
        correct: false,
      },
      {
        title: 'Null',
        correct: false,
      },
      {
        title: 'Reference Error',
        correct: true,
      },
      {
        title: 'Value not found Error',
        correct: false,
      },
    ],
  },
  {
    id: 191,
    question: `What will be the output of the following JavaScript code?

    let x=x+1;
    console.log(x);
    `,
    options: [
      {
        title: '0',
        correct: false,
      },
      {
        title: 'Null',
        correct: false,
      },
      {
        title: 'Reference error',
        correct: false,
      },
      {
        title: 'NaN',
        correct: true,
      },
    ],
  },
  {
    id: 192,
    question: `What will be the output of the following JavaScript code?

    [x,y]=[y,x];`,
    options: [
      {
        title: 'Throws exception',
        correct: false,
      },
      {
        title: 'Swap the value of the two variables',
        correct: false,
      },
      {
        title: 'Flashes an error',
        correct: true,
      },
      {
        title: 'Creates a new reference object',
        correct: false,
      },
    ],
  },
  {
    id: 193,
    question: `Which looping statement allows XML tags to appear in JavaScript programs and adds API for operating on XML data?`,
    options: [
      {
        title: 'for loop',
        correct: false,
      },
      {
        title: 'while loop',
        correct: false,
      },
      {
        title: 'for/each loop',
        correct: true,
      },
      {
        title: 'do while loop',
        correct: false,
      },
    ],
  },
  {
    id: 194,
    question: `Which exception does the Iterators throw from their next() method when there are no more values to iterate, that work on finite collections?`,
    options: [
      {
        title: 'Exit Iteration',
        correct: false,
      },
      {
        title: 'Abort Iteration',
        correct: false,
      },
      {
        title: 'Abort',
        correct: false,
      },
      {
        title: 'Stop Iteration',
        correct: true,
      },
    ],
  },
  {
    id: 195,
    question: `Which method of the iterable object returns an iterator object for the collection?`,
    options: [
      {
        title: 'iterator()',
        correct: false,
      },
      {
        title: '_iterator_()',
        correct: true,
      },
      {
        title: '_iteration_()',
        correct: false,
      },
      {
        title: '_return_iterator_()',
        correct: false,
      },
    ],
  },
  {
    id: 196,
    question: `What will be the output of the following JavaScript code?

    <p id="demo"></p>
    <script>
    function myFunction() 
    {
      var res = "";
      res=res + Number.isSafeInteger(Math.pow(2, 53)-1)+": 2<sup>53</sup>-1<br>";
      document.getElementById("demo").innerHTML = res;
    }
    </script> `,
    options: [
      {
        title: 'true',
        correct: true,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'Error',
        correct: false,
      },
      {
        title: 'Undefined',
        correct: false,
      },
    ],
  },
  {
    id: 197,
    question: `What will be the output of the following JavaScript code?

    <p id="demo"></p>
    <script>
    function myFunction() 
    {
       document.getElementById("demo").innerHTML = Number.MAX_VALUE;
    }
    </script>`,
    options: [
      {
        title: '1.7976931348623157e+308',
        correct: true,
      },
      {
        title: '1.7976931348623157e+305',
        correct: false,
      },
      {
        title: '1.7976931348623157e+307',
        correct: false,
      },
      {
        title: 'Error',
        correct: false,
      },
    ],
  },
  {
    id: 198,
    question: `What will be the output of the following JavaScript code?

    <p id="demo"></p>
    <script>
    function myFunction() 
    {
       document.getElementById("demo").innerHTML = Number.NEGATIVE_INFINITY;
    }
    </script>`,
    options: [
      {
        title: '-1000',
        correct: false,
      },
      {
        title: '-infinity',
        correct: true,
      },
      {
        title: 'infinity',
        correct: false,
      },
      {
        title: 'undefined',
        correct: false,
      },
    ],
  },
  {
    id: 199,
    question: ` What will be the output of the following JavaScript code?

    <p id="demo"></p>
    <script>
    function myFunction() 
    {
       var x = 100;
       document.getElementById("demo").innerHTML = x.NEGATIVE_INFINITY;
    }
    </script>`,
    options: [
      {
        title: 'true',
        correct: false,
      },
      {
        title: 'false',
        correct: false,
      },
      {
        title: 'Error',
        correct: false,
      },
      {
        title: 'Undefined',
        correct: true,
      },
    ],
  },
  {
    id: 200,
    question: `What will be the output of the following JavaScript code?

    <p id="demo"></p>
    <script>
    function myFunction() 
    {
       var num = 5.56789;
       var n = num.toExponential();
       document.getElementById("demo").innerHTML = n;
    }
    </script>
    `,
    options: [
      {
        title: '5.56789e+0',
        correct: true,
      },
      {
        title: '5.57e+0',
        correct: false,
      },
      {
        title: '5.568e+0',
        correct: false,
      },
      {
        title: 'Error',
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
//console.log(shuffle(JsQuestionData));
