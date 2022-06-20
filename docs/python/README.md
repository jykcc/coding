## Python 奇淫巧计

#### Windows平台,python使用打印机

```python
# 不需要指定打印机，默认使用系统默认打印机
import win32api
import win32print
# 文件推荐使用绝对路径，如果使用相对路径，得保证文件能被正常找到
file = r"C:\Users\xx\Documents\x.pdf"

def atuo_printf():
		win32api.ShellExecute(
                    0,
                    "print",
	                   file ,
                    '/d:"%s"' % win32print.GetDefaultPrinter(),
                    ".",
                    0
                )

if __name__ == '__main__':
		atuo_printf()
```

