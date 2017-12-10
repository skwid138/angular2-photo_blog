// this is called a barrel
// it re-exports all components and services
// for a feature, it does nothing else

// it helps avoid having to import each component into the app.module

// export entry-list component
export * from './entry-list/entry-list.component';

// export entry component
export * from './entry/entry.component';

// export entry comment form component
export * from './entry/entry-comment-form.component';

// export entry service
export * from './shared/entry.service';