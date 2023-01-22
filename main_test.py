from main import hello


def test_default_arg():
    assert hello('world') == 'hello world'

def test_default_arg():
    assert hello() == 'hello World'
