class Node:
	def __init__(self, data):
		self.data = data
		self.left = None
		self.right = None


class BinaryTree:
	def __init__(self):
		self.root = None

	# Insert nodes manually (Binary Tree, not BST)
	def create_sample_tree(self):
		self.root = Node(1)
		self.root.left = Node(2)
		self.root.right = Node(3)
		self.root.left.left = Node(4)
		self.root.left.right = Node(5)

	# Inorder Traversal (Left, Root, Right)
	def inorder(self, node):
		if node:
			self.inorder(node.left)
			print(node.data, end=" ")
			self.inorder(node.right)

	# Preorder Traversal (Root, Left, Right)
	def preorder(self, node):
		if node:
			print(node.data, end=" ")
			self.preorder(node.left)
			self.preorder(node.right)

	# Postorder Traversal (Left, Right, Root)
	def postorder(self, node):
		if node:
			self.postorder(node.left)
			self.postorder(node.right)
			print(node.data, end=" ")


# Main Program
if __name__ == "__main__":
	bt = BinaryTree()
	bt.create_sample_tree()
	print("Inorder Traversal: ", end="")
	bt.inorder(bt.root)
	print("\nPreorder Traversal: ", end="")
	bt.preorder(bt.root)
	print("\nPostorder Traversal: ", end="")
	bt.postorder(bt.root)