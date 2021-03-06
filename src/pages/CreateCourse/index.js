import React, { useRef } from 'react';
import { FiBookOpen, FiYoutube, FiImage } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import { Input } from '~/components/Input';
import { InputFile } from '~/components/InputFile';
import { TextArea } from '~/components/TextArea';

import { Container } from './styles';

export default function NewIncident() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = async ({ file, title, description, value }) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string()
          .max(30, 'O Título precisa ter no máximo 30 caracteres')
          .required('Campo obrigatório'),
        description: Yup.string()
          .max(125, 'A descrição pode ter no máximo 125 caracteres')
          .required('Campo obrigatório'),
        value: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(
        { file, title, description, value },
        {
          abortEarly: false,
        }
      );
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
    dispatch();
  };

  const handleChange = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', e.target.files[0]);
  };

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Criar novo curso</h1>
        <Input
          placeholder="Insira o título"
          name="title"
          icon={FiBookOpen}
          label="Título"
        />

        <TextArea
          placeholder="Insira a descrição de seu curso"
          name="description"
          label="Descrição"
        />

        <InputFile
          type="file"
          name="img-course"
          accept="image/*"
          label="Insira uma imagem"
          onChange={handleChange}
          icon={FiImage}
          placeholder="Imagem de capa"
        />

        <InputFile
          type="file"
          name="video-course"
          accept="video/*"
          label="Insira um vídeo"
          placeholder="Vídeo promocional"
          onChange={handleChange}
          icon={FiYoutube}
        />

        <button type="submit">
          <strong>Salvar</strong>
        </button>
      </Form>
    </Container>
  );
}
