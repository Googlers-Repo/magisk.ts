declare class MagiskConstructor {
    path: string;
    tmp: string;
    modules: string;
    config: string;
    mirror: string;
    block: string;
    rootdir: string;
    secure_dir_base: string;
    secure_dir: any;
    constructor();
    private exec;
    busybox(command: string, args: string[]): void;
}
declare const Magisk: MagiskConstructor;
export { Magisk };
