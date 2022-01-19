# NgRx Basics

## Implementación del patrón Redux en aplicación angular

### App Contador implementación de comunicación mediante @Input @Output vs NgRx

![alt text](https://ngrx.io/assets/images/badge.svg "NGRX LOGO")

---

Conceptos y ejemplos sobre el manejo Action, Reducer, State, Store

## Redux

- La información se encuentra en una estructura previamente definida.
- Toda la información estará almacenada en el STORE
- El STORE no se modifica de forma directa
- Cualquier interacción con el STORE se realiza mediante el disparo (DISPATCH) de acciones ( ACTIONS )

- El estado actual de la información se llama STATE
- Un nuevo estado es creado con base a la combinación del estado anterior (OldState) y una acción (ACTION) a traves de una función pura llamada REDUCER

---

### Action

Única fuente de información que se envia por interacción del usuario o programa

Tiene dos propiedades

1. Type (Obligatorio)\*
2. Payload (Opcional) : Es la menor cantidad de información para realizar dicha acción

```typescript
export interface Action {
  type: string;
  payload?: any;
}
```

---

### Reducer

En esencia es un contenedor de acciones que retorna un nuevo estado

- Función que recibe unicamente dos argumentos.
- Siempre retorna un estado
- Es una función pura - No genera efectos fuera de su scope

Argumentos que recibe la función

1. State ( oldState )
2. Action

```typescript
export interface Reducer<T> {
  (state: T, action: Action): T;
}
```

---

### State

Reglas del state:

- Solo lectura
- Nunca se muta de forma directa
- Se prohibe la utilización de funciones que muten los objetos/arreglos como por ejemplo : push ya que los objetos y arreglos son pasados por referencia
- No se manipulan de forma directa

---

### Store

Responsabilidades del Store:

- Permite la lectura del estado mediante la función getState();
- Permite la creación de un nuevo estado mediante la función dispatch( action: Action )
- Permite la notificación de cambiaos mediante la subscripción.

```typescript
const store: Store = createStore(contadorReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Implement Reducer

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
```

---
