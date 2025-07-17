
using System.Net.Http;
using Newtonsoft.Json;


public class Vector2D
{
	// attributes
	protected int x;
	protected int y;
	
	public Vector2D(int p_x, int p_y)
	{
		x = p_x;
		y = p_y;
	}

	// methods
	public string printVariables()
	{
		return $"{x} and {y}";
	}
}

public class Vector3D : Vector2D
{
	public int z;

	public Vector3D(int p_x, int p_y, int p_z) : base(p_x, p_y)
	{
		z = p_z;
	}

	public new string printVariables()
	{
		return $"{x}, {y}, and {z}";
	}
}


class Program
{
	static void Main(string[] args)
	{
		Vector3D testVector = new Vector3D(10, 34, 10);
		Vector3D nanoVector = new Vector3D(5, 6, 7);	

		Console.WriteLine("testVector: " + testVector.printVariables());
		Console.Write("nanoVector: " + nanoVector.printVariables());
	}
}

