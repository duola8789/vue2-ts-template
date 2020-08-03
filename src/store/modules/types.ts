import {Module} from 'vuex';
import {RootState} from '@/store/root-store/interface-types';
import {ExampleState} from '@/store/modules/example-store/interface-types';

export type StoreModuleName = 'example';
export type StoreModuleChildName = 'demo1';

export type StoreModule<T> = {
    name: StoreModuleName;
    path: string;
    content: Module<T, RootState>;
    children: {
        [keys in StoreModuleChildName]: string;
    };
};

export type StoreModules = {
    [keys in StoreModuleName]: StoreModule<ExampleState>;
};
