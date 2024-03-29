module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': 0,
		'eol-last': 0,
        'quotes': 0,
        'no-tabs': 0,
        "vue/multi-word-component-names": ["error", {
            "ignores": ['Sport', 'Gym', 'Banner']
        }]
	}
}
