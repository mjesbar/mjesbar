# TIPOS DE VARIABLES
entero: int = 90
decimal: float = 3.14159
string: str = "ejemplo"
boolean: bool = True


# FUNCIONES
def function_x(arg1: int, arg2: str) -> str:
    # Cuerpo de la function
    res = arg2 + str(arg1)
    return res


# ESTRUCTURA DE DATOS
ls: list = [1, 2, 3]
mat: list = [[1, 2], [3, 4], [5, 6]]
dt: dict = {"key1": "value1", "key2": "value2", "key3": {"a": 1}}
tp: tuple = ("abc", False)
st: set = set([1, 2, 3, 3, 3, 3, 3])


# CLASSES
class Migue:
    def __init__(self, p_patas: int, p_estilo: str):
        self.patas = p_patas
        self.estilo_pelo = p_estilo

    def caminar(self):
        print(f"Migue esta caminando... con {self.patas}")
        return "ok"

    @classmethod
    def dormir(cls):
        print("Migue esta durmiendo...")


class HijoDeMigue(Migue):
    pass


migue_clon_1 = Migue(1, "cucuu")
migue_clon_2 = Migue(99, "indio")

print("migue clon 1 patas:", migue_clon_1.patas)
print("migue clon 1 estilo_pelo:", migue_clon_1.estilo_pelo)

print("migue clon 2 patas:", migue_clon_2.patas)
print("migue clon 2 estilo_pelo:", migue_clon_2.estilo_pelo)

migue_clon_1.caminar()
print("action1:", migue_clon_1.caminar())

hijo_de_migue = HijoDeMigue(9, "a")
print("action1:", hijo_de_migue.caminar())

Migue.dormir()
