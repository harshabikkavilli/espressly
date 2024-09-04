'use client';

import { Amplify } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from 'amplify/data/resource';

import MainLayout from 'src/components/main';

import Welcome from 'src/sections/welcome';

import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt('Todo content'),
    });
  }

  return (
    <MainLayout>
      <Welcome />
    </MainLayout>
  );
}
