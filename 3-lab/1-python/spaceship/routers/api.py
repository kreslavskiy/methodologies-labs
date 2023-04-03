from fastapi import APIRouter
import numpy

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def matrix() -> dict:
    first_matrix = numpy.random.rand(10, 10)
    second_matrix = numpy.random.rand(10, 10)
    result = numpy.dot(first_matrix, second_matrix)

    loh = {
        "first_matrix": first_matrix.tolist(),
        "second_matrix": second_matrix.tolist(),
        "result": result.tolist()
    }

    return loh
