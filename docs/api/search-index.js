var searchIndex = {};
searchIndex["cargo_make"] = {"doc":"cargo-make","items":[[0,"types","cargo_make","types",null,null],[3,"CliArgs","cargo_make::types","Holds CLI args",null,null],[12,"build_file","","The external Makefile.toml path",0,null],[12,"task","","The task to invoke",0,null],[12,"log_level","","Log level name",0,null],[12,"cwd","","Current working directory",0,null],[12,"env","","Environment variables",0,null],[12,"disable_workspace","","Prevent workspace support",0,null],[12,"print_only","","Only print the execution plan",0,null],[12,"list_all_steps","","List all known steps",0,null],[12,"experimental","","Allows access unsupported experimental predefined tasks",0,null],[3,"RustInfo","","Holds rust info for the current runtime",null,null],[12,"version","","version",1,null],[12,"channel","","channel",1,null],[12,"target_arch","","target arch cfg value",1,null],[12,"target_env","","target env cfg value",1,null],[12,"target_os","","target OS cfg value",1,null],[12,"target_pointer_width","","target pointer width cfg value",1,null],[12,"target_vendor","","target vendor cfg value",1,null],[3,"GitInfo","","Holds git info for the given repo directory",null,null],[12,"branch","","branch name",2,null],[12,"user_name","","user.name",2,null],[12,"user_email","","user.email",2,null],[3,"Workspace","","Holds crate workspace info.",null,null],[12,"members","","members paths",3,null],[3,"PackageInfo","","Holds crate package information loaded from the Cargo.toml file package section.",null,null],[12,"name","","name",4,null],[12,"version","","version",4,null],[12,"description","","description",4,null],[12,"license","","license",4,null],[12,"documentation","","documentation link",4,null],[12,"homepage","","homepage link",4,null],[12,"repository","","repository link",4,null],[3,"CrateInfo","","Holds crate information loaded from the Cargo.toml file.",null,null],[12,"package","","package info",5,null],[12,"workspace","","workspace info",5,null],[3,"EnvInfo","","Holds env information",null,null],[12,"rust_info","","Rust info",6,null],[12,"crate_info","","Crate info",6,null],[12,"git_info","","Git info",6,null],[3,"FlowInfo","","Holds flow information",null,null],[12,"config","","The flow config object",7,null],[12,"task","","The main task of the flow",7,null],[12,"env_info","","The env info",7,null],[12,"disable_workspace","","Prevent workspace support",7,null],[3,"TaskCondition","","Holds condition attributes",null,null],[12,"platforms","","Platform names (linux, windows, mac)",8,null],[12,"channels","","Channel names (stable, beta, nightly)",8,null],[12,"env_set","","Environment variables which must be defined",8,null],[12,"env_not_set","","Environment variables which must not be defined",8,null],[12,"env","","Environment variables and their values",8,null],[3,"Task","","Holds a single task configuration such as command and dependencies list",null,null],[12,"description","","Task description",9,null],[12,"disabled","","if true, the command/script of this task will not be invoked, dependencies however will be",9,null],[12,"condition","","if provided all condition values must be met in order for the task to be invoked (will not stop dependencies)",9,null],[12,"condition_script","","if script exit code is not 0, the command/script of this task will not be invoked, dependencies however will be",9,null],[12,"force","","if true, any error while executing the task will be printed but will not break the build",9,null],[12,"env","","The env vars to setup before running the task commands",9,null],[12,"alias","","if defined, task points to another task and all other properties are ignored",9,null],[12,"linux_alias","","acts like alias if runtime OS is Linux (takes precedence over alias)",9,null],[12,"windows_alias","","acts like alias if runtime OS is Windows (takes precedence over alias)",9,null],[12,"mac_alias","","acts like alias if runtime OS is Mac (takes precedence over alias)",9,null],[12,"install_crate","","if defined, the provided crate will be installed (if needed) before running the task",9,null],[12,"install_script","","if defined, the provided script will be executed before running the task",9,null],[12,"command","","The command to execute",9,null],[12,"args","","The command args",9,null],[12,"script","","If command is not defined, and script is defined, the provided script will be executed",9,null],[12,"script_runner","","The script runner (defaults to cmd in windows and sh for other platforms)",9,null],[12,"run_task","","The task name to execute",9,null],[12,"dependencies","","A list of tasks to execute before this task",9,null],[12,"linux","","override task if runtime OS is Linux (takes precedence over alias)",9,null],[12,"windows","","override task if runtime OS is Windows (takes precedence over alias)",9,null],[12,"mac","","override task if runtime OS is Mac (takes precedence over alias)",9,null],[3,"PlatformOverrideTask","","Holds a single task configuration for a specific platform as an override of another task",null,null],[12,"clear","","if true, it should ignore all data in base task",10,null],[12,"disabled","","if true, the command/script of this task will not be invoked, dependencies however will be",10,null],[12,"condition","","if provided all condition values must be met in order for the task to be invoked (will not stop dependencies)",10,null],[12,"condition_script","","if script exit code is not 0, the command/script of this task will not be invoked, dependencies however will be",10,null],[12,"force","","if true, any error while executing the task will be printed but will not break the build",10,null],[12,"env","","The env vars to setup before running the task commands",10,null],[12,"install_crate","","if defined, the provided crate will be installed (if needed) before running the task",10,null],[12,"install_script","","if defined, the provided script will be executed before running the task",10,null],[12,"command","","The command to execute",10,null],[12,"args","","The command args",10,null],[12,"script","","If command is not defined, and script is defined, the provided script will be executed",10,null],[12,"script_runner","","The script runner (defaults to cmd in windows and sh for other platforms)",10,null],[12,"run_task","","The task name to execute",10,null],[12,"dependencies","","A list of tasks to execute before this task",10,null],[3,"ConfigSection","","Holds the configuration found in the makefile toml config section.",null,null],[12,"init_task","","Init task name which will be invoked at the start of every run",11,null],[12,"end_task","","End task name which will be invoked at the end of every run",11,null],[3,"Config","","Holds the entire configuration such as task definitions and env vars",null,null],[12,"config","","Runtime config",12,null],[12,"env","","The env vars to setup before running the tasks",12,null],[12,"tasks","","All task definitions",12,null],[3,"ExternalConfig","","Holds the entire externally read configuration such as task definitions and env vars where all values are optional",null,null],[12,"extend","","Path to another toml file to extend",13,null],[12,"config","","Runtime config",13,null],[12,"env","","The env vars to setup before running the tasks",13,null],[12,"tasks","","All task definitions",13,null],[3,"Step","","Execution plan step to execute",null,null],[12,"name","","The task name",14,null],[12,"config","","The task config",14,null],[3,"ExecutionPlan","","Execution plan which defines all steps to run and the order to run them",null,null],[12,"steps","","A list of steps to execute",15,null],[4,"RustChannel","","Rust channel type",null,null],[13,"Stable","","Rust stable channel",16,null],[13,"Beta","","Rust beta channel",16,null],[13,"Nightly","","Rust nightly channel",16,null],[5,"get_platform_name","","Returns the platform name",null,{"inputs":[],"output":{"name":"string"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"cliargs"}}],[11,"new","","Creates and returns a new instance.",0,{"inputs":[],"output":{"name":"cliargs"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",16,{"inputs":[{"name":"self"}],"output":{"name":"rustchannel"}}],[11,"eq","","",16,{"inputs":[{"name":"self"},{"name":"rustchannel"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"rustinfo"}}],[11,"new","","Returns new instasnce",1,{"inputs":[],"output":{"name":"rustinfo"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"gitinfo"}}],[11,"new","","Returns new instasnce",2,{"inputs":[],"output":{"name":"gitinfo"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"workspace"}}],[11,"new","","Creates and returns a new instance.",3,{"inputs":[],"output":{"name":"workspace"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"packageinfo"}}],[11,"new","","Creates and returns a new instance.",4,{"inputs":[],"output":{"name":"packageinfo"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"crateinfo"}}],[11,"new","","Creates and returns a new instance.",5,{"inputs":[],"output":{"name":"crateinfo"}}],[11,"load","","Loads the crate info based on the Cargo.toml found in the current working directory.",5,{"inputs":[{"name":"logger"}],"output":{"name":"crateinfo"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"envinfo"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"self"}],"output":{"name":"flowinfo"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"taskcondition"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"self"}],"output":{"name":"task"}}],[11,"new","","Creates and returns a new instance.",9,{"inputs":[],"output":{"name":"task"}}],[11,"extend","","Copies values from the task into self.",9,{"inputs":[{"name":"task"},{"name":"task"}],"output":null}],[11,"is_force","","Returns true if the task force attribute is defined and true",9,{"inputs":[{"name":"task"}],"output":{"name":"bool"}}],[11,"get_normalized_task","","Returns a new task based on the override information and current platform.",9,{"inputs":[{"name":"task"}],"output":{"name":"task"}}],[11,"get_alias","","Returns the alias value based on the current platform and task definition.",9,{"inputs":[{"name":"task"}],"output":{"name":"option"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"self"}],"output":{"name":"platformoverridetask"}}],[11,"extend","","Copies values from the task into self.",10,{"inputs":[{"name":"platformoverridetask"},{"name":"task"}],"output":null}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"configsection"}}],[11,"new","","Creates and returns a new instance.",11,{"inputs":[],"output":{"name":"configsection"}}],[11,"extend","","Copies values from the config section into self.",11,{"inputs":[{"name":"configsection"},{"name":"configsection"}],"output":null}],[11,"fmt","","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"self"}],"output":{"name":"config"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Creates and returns a new instance.",13,{"inputs":[],"output":{"name":"externalconfig"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"CliArgs"],[3,"RustInfo"],[3,"GitInfo"],[3,"Workspace"],[3,"PackageInfo"],[3,"CrateInfo"],[3,"EnvInfo"],[3,"FlowInfo"],[3,"TaskCondition"],[3,"Task"],[3,"PlatformOverrideTask"],[3,"ConfigSection"],[3,"Config"],[3,"ExternalConfig"],[3,"Step"],[3,"ExecutionPlan"],[4,"RustChannel"]]};
initSearch(searchIndex);
