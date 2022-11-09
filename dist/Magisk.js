// @ts-ignore
import shell from "shelljs";
class MagiskConstructor {
    constructor() {
        this.exec = this.exec.bind(this);
        this.path = this.exec(`magisk --path`).out;
        this.tmp = `${this.path}/.magisk`;
        this.modules = `${this.path}/modules`;
        this.config = `${this.path}/config`;
        this.mirror = `${this.path}/mirror`;
        this.block = `${this.path}/block`;
        this.rootdir = `${this.path}/rootdir`;
        this.secure_dir_base = "/data/adb";
        this.secure_dir = {
            "post-fs-data": `${this.secure_dir_base}/post-fs-data.d`,
            service: `${this.secure_dir_base}/service.d`,
            modules: `${this.secure_dir_base}/modules`,
            modules_update: `${this.secure_dir_base}/modules_update`,
            database: `${this.secure_dir_base}/magisk.db`,
            databin: `${this.secure_dir_base}/magisk`,
        };
    }
    exec(command) {
        if (!shell.which("magisk")) {
            throw new Error("This library requires magisk");
        }
        const { stdout, stderr, code } = shell.exec(command, { silent: true });
        return {
            out: stdout.slice(0, -1),
            err: stderr,
            code: code,
        };
    }
    busybox(command, args) {
        shell.exec(`${this.secure_dir.databin}/busybox ${command} ${args.join(" ")}`);
    }
}
const Magisk = new MagiskConstructor();
export { Magisk };
//# sourceMappingURL=Magisk.js.map