import graphene


class Query(graphene.ObjectType):
	hello = graphene.String(name=graphene.String())

	def resolve_hello(self, info, name="World"):
		return 'Hello ' + name


schema = graphene.Schema(query=Query)
result = schema.execute('''{
	hello 
}''')
print(result.data['hello']) # "Hello World"


result = schema.execute('''{ 
	hello(name: "friend") 
}''')
print(result.data['hello']) # "Hello friend"


