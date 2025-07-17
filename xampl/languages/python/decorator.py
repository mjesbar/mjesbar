

def f(func):
    def wrapper(*args, **kwargs):
        print('start')
        result = func(*args, **kwargs)
        print('end')
        return result
    return wrapper


@f
def sum(a, b):
    return a - b


print(sum(1, 23))