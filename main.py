# This file uses an installed package to print hello world in camelcase
import camelcase

c = camelcase.CamelCase()

txt = "hello world"

print(c.hump(txt))
