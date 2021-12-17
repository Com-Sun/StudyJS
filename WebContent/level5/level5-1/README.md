# 프로그래밍 연습

DOM을 이용해서 JS로 버튼을 추가해봅시다.

# input 과 button 샘플

    <input type='text' id='input1'><button id='btn1' onclick='read()'>click</button>
    <script> 
        var read = function() {
            var input = document.getElementById('input1');
            console.log(input.value);
        };
    </script>

### [결과물](./button.html)