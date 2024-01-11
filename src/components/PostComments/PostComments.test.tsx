import { fireEvent, render, screen } from '@testing-library/react'
import Post from '.'

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    it('Deve adicionar dois comentários corretamente', () => {
        render(<Post />)

    // Encontrar o textarea usando data-testid
    const textarea = screen.getByTestId('post-comments-textarea')

    // Adicionar o primeiro comentário
    fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } })
    fireEvent.submit(screen.getByTestId('post-comments-form'))

    // Adicionar o segundo comentário
    fireEvent.change(textarea, { target: { value: 'Segundo comentário' } })
    fireEvent.submit(screen.getByTestId('post-comments-form'))

    // Verificar se os dois comentários foram adicionados à lista
    const commentsList = screen.getByTestId('post-comments')
    expect(commentsList.children.length).toBe(2)
    })
})
