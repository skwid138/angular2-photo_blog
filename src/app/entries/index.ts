// this is called a barrel
// it re-exports all components and services
// for a feature, it does nothing else

// it helps avoid having to import each component into the app.module

// export entry-list
export * from './entry-list/entry-list.component';

// export entry
export * from './entry/entry.component'